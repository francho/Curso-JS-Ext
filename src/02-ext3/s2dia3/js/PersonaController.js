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
        me.borrarBtn.on('click', me.borrarPersona, me)
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
    }
});