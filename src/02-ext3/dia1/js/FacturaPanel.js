/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 13/02/12
 * Time: 12:24
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.model.facturacion');

/**
 * En vez de crear objetos de tipo Ext.Panel, crearemos nuestras propias clases que serán las que usemos
 */


/**
 * http://docs.sencha.com/ext-js/3-4/#!/api/Ext.Panel
 * HIERARCHY
 *  Ext.util.Observable
 *    Ext.Component
 *      Ext.BoxComponent
 *        Ext.Container
 *          Ext.Panel
 */


MyApp.model.facturacion.FacturaPanel = Ext.extend(Ext.Panel, {
    title : 'Ejemplo de un panel',
    width: 300,
    height: 200,
    html: '<h1>Hi dude</h1>Esto es el contenido',
    collapsible: true,
    draggable: true,

    // Panel permite definir barras de botones de forma sencilla
    tbar: [{text: 'Nuevo'},{ text:'Guardar'}],


    // Botones al pie
    bbar: [{text: 'pie'}],

    // Botones externo al panel
    fbar: [{text: 'otro'}],

    // Mi propio código
    total: 0,
    addFacturaItem: function item(item) {
        this.total += item.subtotal;
    }
});
