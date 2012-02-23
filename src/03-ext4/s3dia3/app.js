/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 21/02/12
 * Time: 10:27
 * To change this template use File | Settings | File Templates.
 */

/**
 * Lo primero que debemos hacer es configurar el Loader
 */
Ext.Loader.setConfig({
    enabled : true,
    path : {
        MyApp : 'js/MyApp',
        Ext : '../../../../ext-4.0.7-gpl/src'
    }
});

/**
 *  http://docs.sencha.com/ext-js/4-0/#!/api/Ext.app.Application
 *
 * Ext provee de un método para instaciar el objeto padre de nuestra aplicación
 */
Ext.application({
    name : 'MyApp',
    appFolder : 'js/MyApp',
    controllers : ['Home', 'Productos'] ,

    autoCreateViewport : true,


    /* ya no usamos onReady.
     * Este método se llamará cuando se haya cagado el dom y todos nuestros controllers hayan sido inicializados
     */
    launch : function() {
        console.log('MyApp.launch()');
        // Ext.create('MyApp.view.Viewport');  // No es necesario lo definimos con la propiedad autoCreateViewport
    }

});
