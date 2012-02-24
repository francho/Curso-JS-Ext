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
    views:['Viewport', 'Tabpanel', 'productos.Tab'],

    // Contendrá referencias a los elementos más usados
    refs: [{
        ref : 'main',
        selector : 'viewport panel tabpanel[name=main]'
    }],


    init : function() {
        var me = this;

        // Asigna este selector con los eventos definidos al bus de eventos de la aplicación
        me.control({
            'viewport toolbar[dock=top] button menu menuitem[action=usuarios]' : {
                click : me.showUsuarios
            },
            'viewport toolbar[dock=top] button menu #productos' : {
                click : me.showProductos
            },
            'viewport toolbar[dock=top] button menu #inventario' : {
                click : me.showInventario
            },
            'viewport toolbar[dock=top] #salir' : {
                click : me.salir
            }
        });

        console.log('Home controller inicializado');
    },

    showUsuarios : function(btn) {
        this.getMain().createTabIfNotExist({
            title : 'Usuarios',
            xtype : 'panel',
            closable : true
        });
    },

    showProductos : function() {
        // Accede a las referencias definidas en ref (por cada una crea un método get)
        this.getMain().createTabIfNotExist({
            title : 'Productos',
            xtype : 'productostab',
            closable : true
        });
    } ,

    showInventario : function() {
        this.getMain().createTabIfNotExist({
                title : 'Inventario',
                xtype : 'panel',
                closable : true
        });
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
