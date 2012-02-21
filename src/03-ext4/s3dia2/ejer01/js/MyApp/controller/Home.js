/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 21/02/12
 * Time: 11:32
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.controller.Home', {
    extend:'Ext.app.Controller',


    models:[],
    stores:[],
    views:['Viewport', 'Tabpanel'],


    init : function() {
        var me = this;

        // Asigna este selector con los eventos definidos al bus de eventos de la aplicación
        this.control({
            'viewport toolbar[dock=top] button menu menuitem[action=usuarios]' : {
                click : this.showUsuarios
            },
            'viewport toolbar[dock=top] button menu #productos' : {
                click : this.showProductos
            },
            'viewport toolbar[dock=top] button menu #inventario' : {
                click : this.showInventario
            },
            'viewport toolbar[dock=top] #salir' : {
                click : this.salir
            }
        });

        console.log('Home controller inicializado');
    },

    showUsuarios : function(btn) {
        var tabpanel = Ext.ComponentQuery.query('viewport panel tabpanel')[0]; // Nos quedamos con el primero que encuentre
        tabpanel.createTabIfNotExist('Usuarios');
    },

    showProductos : function() {
        var tabpanel = Ext.ComponentQuery.query('viewport panel tabpanel')[0]; // Nos quedamos con el primero que encuentre
        tabpanel.createTabIfNotExist('Productos');
    } ,

    showInventario : function() {
        var tabpanel = Ext.ComponentQuery.query('viewport panel tabpanel')[0]; // Nos quedamos con el primero que encuentre
        tabpanel.createTabIfNotExist('Inventario');
    } ,

    salir : function() {
        Ext.Msg.confirm('Salir','¿Estás seguro?', function(opt){
            if(opt=='yes')  {
                console.log('salir');
                document.location='http://google.com';
            }
        },this);
    }

});
