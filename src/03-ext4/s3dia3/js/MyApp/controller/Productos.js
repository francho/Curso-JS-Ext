/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 21/02/12
 * Time: 10:38
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.controller.Productos', {
    extend:'Ext.app.Controller',

    models:['Producto'],
    stores:['Productos'],
    views:[ 'productos.ProductosGrid', 'productos.ProductoForm'],

    refs:[
        {
            ref:'formprod',
            selector:'viewport productoform'
        }, {
            ref:'gridprod',
            selector: 'viewport tabpanel[name=main] productostab productosgrid'
        }
    ],


    /*
     * Inicializa el controlador
     * http://docs.sencha.com/ext-js/4-0/#!/api/Ext.app.Controller-method-control
     */
    init:function () {
        var me = this;

        console.log('Productos controller inicializado');

        me.control({
                'viewport tabpanel[name=main] productostab productosgrid':{ itemdblclick : me.onProductoSelected } ,
                'productoform toolbar button[action=guardar]' : { click : me.onGuardarClick }
        });

    },

    onProductoSelected:function (grid, model) {
        var form = this.getFormprod();

        form.loadRecord(model);
    },

    onGuardarClick : function(grid) {
        console.log('click...');

        var values = this.getFormprod().getValues();
        var store = this.getGridprod().getStore();

        console.log('id',values.id);
        console.log('store',store);

        var rec = store.getById(parseInt(values.id));

        for(var cmp in values) {
            console.log('->',cmp);
            if( cmp == 'precio' ) {
                rec.set(cmp, parseFloat(values[cmp]));
            } else if(cmp == 'inventario') {
                rec.set(cmp, parseInt(values[cmp]));
            } else {
                rec.set(cmp, values[cmp]);
            }
        }
    }


});