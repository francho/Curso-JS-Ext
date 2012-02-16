/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 16/02/12
 * Time: 9:56
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.Viewport = Ext.extend(Ext.Viewport, {

    layout: 'border',


    initComponent: function(){
        var tabs = new MyApp.controller.PersonaTabs();

        this.items = [{
                xtype : 'panel',
                region: 'north',
                height: 80,
                html : '<h1>Sistema empresarial</h1>'
            }, {
                xtype : 'panel',
                title : 'Menu',
                width : 200,
                collapsible : true,
                split : true,
                region : 'west'
            } , {
                xtype  : 'panel',
                region : 'center',
                layout : 'fit',
                items  : [ tabs ]
            }
        ];

        MyApp.view.Viewport.superclass.initComponent.call(this);
    }
});