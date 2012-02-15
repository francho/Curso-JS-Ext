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
    title:'Ejemplo de un panel',
    width:300,
    height:200,
    // html: '<h1>Hi dude</h1>Esto es el contenido',
    collapsible:true,
    draggable:true,

    // Panel permite definir barras de botones de forma sencilla
    tbar:[
        {text:'Nuevo'},
        { text:'Guardar'}
    ],


    // Botones al pie
    bbar:[
        {text:'pie'}
    ],

    // Botones externo al panel
    fbar:[
        {text:'otro'}
    ],

    // Mi propio código
    total:0,
    addFacturaItem:function (item) {
        this.total += item.subtotal;

        // Puedo usar mis propios eventos (definidos en el initComponent)
        this.fireEvent('agregarItem', item);
    },

    // http://www.sencha.com/learn/legacy/Ext_3_Overview#Component_Life_Cycle

    // Para examen ;)
    // Hay que tener en cuenta el ciclo de vida (descrito en Component.js)
    // En vez de sobreescribir el constructor sobreescribiremos initComponents

    initComponent:function () {
        // Puedo añadir nuevos componentes
        // debo heredar de Container para poder usar los items
        this.items = [
            {title:'Panel interno', html:'Soy interno!'}
        ];
        // Importante llamar al de la superclase, en el se inicializan muchas cosas (como los listeners)
        MyApp.model.facturacion.FacturaPanel.superclass.initComponent.call(this);

        this.addEvents({
           'exportar': true,
            'agregarItem': true,
            'facturaGuardada':true
        });

        console.log("Panel initComponent()");
    },

    // Otro método "de template" que puedo sobreescribir
    // Se ejecutará cuando en el DOM esten cargados todos nuestros nodos
    afterRender:function (container) {
        MyApp.model.facturacion.FacturaPanel.superclass.afterRender.call(this, container);
        console.log("Panel afterRender()");
    },

    beforeDestroy:function () {
        MyApp.model.facturacion.FacturaPanel.superclass.beforeDestroy.call(this);
        console.log("Panel beforeDestroy()");
    }

});
