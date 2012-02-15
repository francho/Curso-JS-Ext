/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 13/02/12
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.stores');

/**
 * La forma de manejar colecciones de datos en lo que mas cambió de Ext3 a Ext4
 *
 * http://www.sencha.com/learn/legacy/Manual:Data:Stores:Store
 *
 * http://docs.sencha.com/ext-js/3-4/#!/api/Ext.data.Store
 */

MyApp.stores.Personas = Ext.extend(Ext.data.Store, {

    // No existe el initComponents así que sobreescribimos el constructor

    constructor : function() {
        // Definición de registro
        var Persona = Ext.data.Record.create([
            'nombre','apellido','edad','genero'
            /*
            {name:'nombre'},
            {name:'edad'},
            */
        ]);

        // El reader se encargará de extraer la informacion
        var reader = new Ext.data.JsonReader({
            root: 'personas',
            idProperty : 'id' ,

            // Propiedad que devolverá true cuando una operación haya concluido ok
            "successProperty": "success"
        },Persona);

        // Tambien puedo definir un write

        var writer = new Ext.data.JsonWriter({
            writeAllFields: true
        });


        // Luego hay que definir un proxy que será el encargado de obtener los datos
        // A las URLS se les pasa un campo xaction con la accion
        var proxy = new Ext.data.HttpProxy({
            // url:'serverside/personas.json'

            // Puedo definir una URL por cada accion
            api : {
                create  : 'serverside/response',
                read    : 'serverside/personas.json',
                update  : 'serverside/response',
                destroy : 'serverside/response'
            }
        });

        // Configuramos nuestra Store
        var config={
            reader: reader,
            writer: writer,
            proxy: proxy
        } ;

        MyApp.stores.Personas.superclass.constructor.call(this,config);
    }

});
