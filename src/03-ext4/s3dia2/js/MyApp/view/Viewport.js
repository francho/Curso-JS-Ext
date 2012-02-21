/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 21/02/12
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.view.Viewport', {
    extend : 'Ext.container.Viewport',
    layout : 'fit',



    initComponent : function() {
        var me = this;

        me.items = [{
            xtype : 'panel',
            // En Ext4 aunque podemos seguir usando tbar, bbar, etc... podemos crear nuestros propios toolbars
            dockedItems : [ {
                xtype : 'toolbar',
                dock : 'top',
                items : [me.createMenuInicio(),'->',{text:'Salir', itemId:'salir'}]
            }]
        }];


        me.callParent();
    },

    createMenuInicio : function() {
        return {
            xtype : 'button',
            text: 'Inicio',
            menu : [
                {text:'Usuarios', action:'usuarios'}, // definimos una propiedad propia 'action' para poder luego encontrar el componente con Ext.ComponentQuery
                {text:'Productos', itemId:'productos'}, // itemId es contextual y se puede repetir. Se suele usar para encontrar componentes también
                {text:'Inventarios'}
            ]
        }
    }
});
