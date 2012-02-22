/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 22/02/12
 * Time: 11:37
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.view.productos.ProductosGrid', {
    extend:Ext.grid.Panel,
    alias:'widget.productosgrid',

    initComponent:function () {
        var me = this;

        me.columns = [
            {
                header:'Nombre',
                dataIndex:'nombre',
                flex: 1
            },{
                header:'Descripcion',
                dataIndex:'descripcion',
                flex: 3
            },{
                header: 'Precio',
                dataIndex: 'precio',
                align : 'right',
                renderer: function (value) {
                    return Ext.String.format('{0} €', value);
                },
                flex: 0.5
            },{
                header:'Inventario',
                dataIndex:'inventario',
                align : 'right',
                flex: 0.5
            }
        ];
        me.store = Ext.create('MyApp.store.Productos');

        me.callParent();

        me.store.load();
    }
});
