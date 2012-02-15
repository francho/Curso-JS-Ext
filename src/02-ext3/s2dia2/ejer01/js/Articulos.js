/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 14/02/12
 * Time: 16:34
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.stores');

MyApp.stores.Articulos = Ext.extend(Ext.data.Store, {

    constructor : function(options) {
        // Definición de registro
        var articulo = Ext.data.Record.create([
            'id',
            'nombre',
            'descripcion',
            'precio',
            'stock',
            'imagen'
        ]);

        var reader = new Ext.data.JsonReader({
            root: 'articulos',
            idProperty : 'id' ,

            "successProperty": "success"
        },articulo);

       var writer = new Ext.data.JsonWriter({
            writeAllFields: true
        });

       var proxy = new Ext.data.HttpProxy({
            api : {
                create  : 'serverside/create',
                read    : 'serverside/articulos.json',
                update  : 'serverside/update',
                destroy : 'serverside/result'
            }
        });

        // Configuramos nuestra Store
        var config = Ext.apply({
            reader: reader,
            writer: writer,
            proxy: proxy
        }, options);

        MyApp.stores.Articulos.superclass.constructor.call(this,config);
    }

});
