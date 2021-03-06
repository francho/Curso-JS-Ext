/*
 * File: app/view/ui/ProductosGrid.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.ProductosGrid', {
    extend: 'Ext.grid.Panel',

    autoScroll: true,
    title: '',
    store: 'ProductosStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nombre',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'descripcion',
                    flex: 1,
                    text: 'Descripcion'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'precio',
                    text: 'Precio'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'existencia',
                    text: 'Existencia'
                }
            ]
        });

        me.callParent(arguments);
    }

});