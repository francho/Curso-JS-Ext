/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 22/02/12
 * Time: 12:57
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.view.productos.ProductoForm', {
    extend : 'Ext.form.Panel',
    alias : 'widget.productoform',
    bodyPadding: 5,


    initComponent : function() {
        var me =this;

        me.bbar = [
            {text:'Nuevo', action:'nuevo'},
            '->',
            {text:'Guardar', action:'guardar'}
        ];

        // Creándolos aquí no permito que me los puedan sobreescribir
        me.items = [{
            xtype : 'hidden',
            name : 'id'
        }, {
            xtype : 'textfield',
            name : 'nombre',
            fieldLabel : 'Nombre'
        }, {
            xtype : 'textarea',
            name : 'descripcion',
            fieldLabel : 'Descripción'
        }, {
            xtype : 'numberfield',
            name : 'precio',
            fieldLabel : 'precio'
        }, {
            xtype : 'numberfield',
            name : 'inventario',
            fieldLabel : 'Inventario'
        }];

        me.callParent();
    }
});
