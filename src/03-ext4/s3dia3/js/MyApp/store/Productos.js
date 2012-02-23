/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 22/02/12
 * Time: 11:34
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.store.Productos', {
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Producto',

    autoSave : true,
    autoSync: true,

    proxy : {
        type : 'ajax',
        url : 'serverside/productos.json',
        reader : {
            type : 'json',
            root : 'articulos'
        }
        ,
        writer: {
            type: 'json',
            writeAllFields : false,
            root : 'articulos'
            //allowSingle :false
            // nameProperty: 'mapping'
        } ,
        api :{
           create  : 'serverside/response.php',
           read    : 'serverside/productos.json',
           update  : 'serverside/response.php',
           destroy : 'serverside/response.php'
        }
    }
});