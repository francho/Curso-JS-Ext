/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 10:19
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.controller');

MyApp.controller.PersonaController = Ext.extend(MyApp.view.PersonaUI, {
    initEvents : function() {
        var me = this;

        me.nuevoBtn.on('click', me.agregarNuevo, me);
        me.borrarBtn.on('click', me.borrarPersona, me);
        me.filtrarBtn.on('click', me.filtrarPersona, me);

        // Queremos capturar el "enter" del campo de texto
        // http://docs.sencha.com/ext-js/3-4/#!/api/Ext.form.TextField
        me.filtroTxt.on('specialkey',me.capturarTecla, me);
    },

    agregarNuevo : function() {
        var store = this.view.getStore();
        var persona = new store.recordType({
            nombre: "Rigoberta",
            apellido: "Zierzo"
        });

        store.add(persona);
    },

    borrarPersona: function() {
        var me = this,
            seleccionados = me.view.getSelectedRecords();
        console.log(seleccionados);

        if(seleccionados.length>0) {
            // http://docs.sencha.com/ext-js/3-4/#!/api/Ext.MessageBox
            Ext.Msg.confirm("Eliminar","¿Estas seguro de borrar estas personas?", function(btn,txt) {
                if(btn=='yes') {
                    me.view.getStore().remove(seleccionados);
                }
            }, me);

        }
    },

    filtrarPersona: function () {
        var me = this,
            txt = me.filtroTxt.getValue();

        if(Ext.isEmpty(txt)) {
            me.view.getStore().clearFilter();
        } else {
            me.view.getStore().filter('nombre',txt);
        }
    },

    capturarTecla: function(textfield, event) {
        if(event.getKey() == event.ENTER) {
            this.filtrarPersona();
        }
    }

});