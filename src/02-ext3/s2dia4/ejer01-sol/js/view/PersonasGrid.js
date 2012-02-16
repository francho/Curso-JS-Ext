/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 12:25
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.PersonasGrid = Ext.extend(Ext.grid.GridPanel, {
    title:'Listado de personas',
    width:500,
    height:300,

    stripeRows:true,

    // Para mandar parámetros de configuracion del viewConfig
    viewConfig:{
        forceFit:true
    },

    initComponent:function () {
        // Minimamente debo definir las store y las columnas que va a tener
        var me = this;

        me.btnBorrar = new Ext.Button({text:'Borrar seleccionados', handler:this.onBorrar, scope:this});

        me.tbar = [ me.btnBorrar ];

        // Si lo añadimos a lascolumns permitirá seleccionar ls filas mediante un checkbox
        me.sm = new Ext.grid.CheckboxSelectionModel();

        me.store = new MyApp.stores.Personas();

        // Cada objeto es una instancia de
        // http://docs.sencha.com/ext-js/3-4/#!/api/Ext.grid.Column
        me.columns = [
            me.sm,
            { header:'Nombre', dataIndex:'nombre', sortable:true, resizable:true },
            { header:'Apellidos', dataIndex:'apellido' },
            { header:'Edad', dataIndex:'edad' },
            { header:'Género', dataIndex:'genero' }
        ]; // generará con ellos el ColumnModel

        // No olvidarse de llamar al método del padre
        MyApp.view.PersonasGrid.superclass.initComponent.call(this);

        me.store.load();
    },


    onBorrar:function () {
        console.log("borrar");

        Ext.Msg.confirm("Eliminar", "¿Estas seguro de borrar estas personas?", function (btn, txt) {
            if (btn == 'yes') {
                var recs = this.getSelectionModel().getSelections();
                this.fireEvent('borrar', this, recs);

                for (var rec in recs) {
                    this.store.remove(recs[rec]);
                }
            }
        },this);

    }

});
