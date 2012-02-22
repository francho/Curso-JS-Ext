/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 22/02/12
 * Time: 10:16
 * To change this template use File | Settings | File Templates.
 */


Ext.define('MyApp.view.productos.Tab', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.productostab',

    title : 'Productos',
    layout: 'border',
    height : 300,
    expandable : true,

    initComponent : function() {
        var me = this;
        me.items = [{
            region : 'east',
            title : 'Formulario',
            width : 300,
            resizable : true,
            xtype : 'productoform'
        }, {
            title : 'Listado de productos',
            region : 'center',

            // El alias que yo definí en mi grid
            xtype : 'productosgrid'

        }] ;

        me.callParent();
    }
});
