/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 13/02/12
 * Time: 11:11
 * To change this template use File | Settings | File Templates.
 */

// Ext3 tiene un método para crear nuestro propio espacio de nombres
Ext.namespace('MyApp.model.facturacion');

// Para definir una clase dentro de mi espacio de nombres
MyApp.model.facturacion.Factura = Ext.extend(Object, {
    cliente : '',
    total : 0,

    // define nuestro constructor (por convenio de Ext3 debe llamarse 'constructor'
    constructor : function(options) {
        // Copia todas las propiedades de un objeto a otro.
        // El tercer parámetro (opcional) puede recibir valores por defecto
        Ext.apply(this,options || {});
    },

    addItem : function(item) {
        this.total += item.subtotal;
    }

});
