/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 22/02/12
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.model.Producto', {
    extend: 'Ext.data.Model',
    idProperty : 'id',
    fields : [
        'id',
        'nombre',
        'descripcion',
        'precio',
        'inventario'
    ]
});