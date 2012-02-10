/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 10/02/12
 * Time: 12:39
 * To change this template use File | Settings | File Templates.
 */

App.define('Automovil', {
    extend : Ext.util.Observable,

    init : function() {
        this.addEvents({
            'encender' : true,
            'apagado'  : true,
            'acelerar' : true
        });

        Automovil.superclass.constructor.call();
    },

    encender : function() {
        this.encendido = true;
        console.log("encendiendo el motor....");
        this.fireEvent('encender', new Date());
    },

    apagar : function() {
        if(this.encendido) {
            this.encendido = false;
            console.log("apagando motor....");
            this.fireEvent('apagado', new Date());
        }
    }
});
