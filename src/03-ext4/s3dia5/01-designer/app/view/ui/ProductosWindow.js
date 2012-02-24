/*
 * File: app/view/ui/ProductosWindow.js
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

Ext.define('MyApp.view.ui.ProductosWindow', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.Categorias',
        'MyApp.view.ProductosGrid',
        'MyApp.view.ProductosForm'
    ],

    height: 610,
    hidden: false,
    width: 675,
    layout: {
        type: 'border'
    },
    collapseFirst: false,
    title: 'Productos',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'categorias',
                    region: 'west',
                    width: 147,
                    collapsed: false,
                    collapsible: true,
                    title: 'Categorias',
                    rootVisible: false
                },
                {
                    xtype: 'panel',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: '',
                    region: 'center',
                    items: [
                        {
                            xtype: 'productosgrid',
                            flex: 3,
                            height: 287,
                            title: ' '
                        },
                        {
                            xtype: 'productosform',
                            flex: 1
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});