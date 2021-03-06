/*
 * File: app/view/ui/ProductosForm.js
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

Ext.define('MyApp.view.ui.ProductosForm', {
    extend: 'Ext.form.Panel',

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    bodyPadding: 10,
    title: 'Producto',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    name: 'nombre',
                    fieldLabel: 'Nombre',
                    flex: 1
                },
                {
                    xtype: 'fieldcontainer',
                    height: 120,
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    fieldLabel: 'Label',
                    flex: 1,
                    items: [
                        {
                            xtype: 'numberfield',
                            padding: '',
                            name: 'precio',
                            fieldLabel: 'precio',
                            flex: 1,
                            margins: '0 5 0 0'
                        },
                        {
                            xtype: 'numberfield',
                            margin: '',
                            name: 'existencias',
                            fieldLabel: 'Existencias',
                            flex: 1,
                            margins: ''
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'guardar',
                            text: 'guardar'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});