/*
 * File: app/view/ui/MyNavigationView.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.MyNavigationView', {
    extend: 'Ext.NavigationView',

    config: {
        useTitleForBackButtonText: true,
        navigationBar: {
            docked: 'top'
        },
        items: [
            {
                xtype: 'tabpanel',
                tabBar: {
                    docked: 'top'
                },
                items: [
                    {
                        xtype: 'container',
                        padding: 20,
                        title: 'Tab 1',
                        items: [
                            {
                                xtype: 'formpanel'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Usuario'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Contraseña'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Tab 2'
                    },
                    {
                        xtype: 'container',
                        title: 'Tab 3'
                    }
                ]
            }
        ]
    }

});