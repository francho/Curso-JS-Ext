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
    views:['Viewport'],


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
            'viewport toolbar[dock=top] #salir' : {
                click : this.salir
            }
        });

        console.log('Home controller inicializado');
    },

    showUsuarios : function() {
        console.log(this);
        Ext.Msg.alert('Poductos', 'Muestro usuarios');
    },

    showProductos : function() {
        console.log(this);
        Ext.Msg.alert('Poductos', 'Muestro productos');
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
