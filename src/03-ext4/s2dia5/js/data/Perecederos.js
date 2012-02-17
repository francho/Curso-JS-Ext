/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 17/02/12
 * Time: 10:57
 * To change this template use File | Settings | File Templates.
 */


/**
 * Todas las clases heredan de una clase llamada Ext.Base
 *
 * Cuando creamos un objeto estamos creando en realidad un objeto de la clase Ext.class
 * Ext.Class
 *
 */

Ext.define('MyApp.data.Perecederos', {
    // indicamos la clase padre
    extend : 'MyApp.data.Producto',

    // Puedo implementar herencia múltiple con esta propiedad
    mixins : {
        // Le pasamos el nombre y una clase
        // Me permitirá llamar a uno u otro específicamente (por ejemplo si tienen métodos que se llaman igual)
        observable : 'Ext.util.Observable'
    },
    config : {
        caducidad : '2012-04-01'
    },

    /**
     * sobreescribimos el constructor
     */
    constructor : function() {
        // Llama a la función idéntica del padre
        // los argumentos deben ser un array
        this.callParent(arguments);

        this.addEvents({
            'caducar' : true,
            'comprar' : true
        });

        this.mixins.observable.constructor.apply(this, arguments);
    },

    // Si yo defino esto hay un conflicto (ya está en observable)
    on : function(event,fn,scope) {
        console.log(arguments);

        // Es una buena idea invocar de esta forma a los métodos que he heredado de forma múltiple
        // por si una clase cambia
        this.mixins.observable.on.apply(this,arguments);
    }
});
