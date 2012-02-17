/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 17/02/12
 * Time: 10:38
 * To change this template use File | Settings | File Templates.
 */

// Nueva forma de definir la clase
// El primer parámetro es el espacio de nombres junto con el nombre de la clase (para que sea usado por el sistema de carga dinámica)
// El segundo es la definición
Ext.define('MyApp.data.Producto', {
    /*
     Este nuevo sistema tiene procesadores (pre y post)
     Vienen definidos por la clase factoría Ext.Class y los dispara el Ext.ClassManager

     http://docs.sencha.com/ext-js/4-0/#!/api/Ext.Class

     Uno de estos es el encargado de precargar las librerías necesarias, otro es de herencia, etc...
     */

    /**
     * Disparará el preProcesador de config
     *
     * Por cada campo definido, la librería me crea los getters y setter a utomaticamente
     */
    config : {
        id         : 0,
        nombre     : '',
        description: '',
        precio     : 0,
        existencia : 0
    },

    /**
     * Método que se ejecutará cuando se construya una instancia de esta clase
     *
     * @param options
     */
    constructor : function(options) {
        this.initConfig(options);
    },

    /**
     * los métodos "applyX" son métodos que permiten interceptar los métodos set
     *
     * El valor que tomará será el devuelto
     *
     * @param value
     */
    applyPrecio : function(value) {
        var impuesto = 0.18;
        return value + value * impuesto;
    }

});
