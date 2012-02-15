/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 13/02/12
 * Time: 11:12
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.model.facturacion');

/**
 * Herencia
 */

MyApp.model.facturacion.FacturaElectronica = Ext.extend(MyApp.model.facturacion.Factura, {
    items : [],
    constructor : function(options) {
        // Debemos llamar al constructor de la superclase
        MyApp.model.facturacion.FacturaElectronica.superclass.constructor.call(this,options);

        console.log(this.cliente, this.total);

        // Este método existirá a nivel de instancia (no se irá al prototipo)
        // (no podría sobrescribirlo)
        this.importar = function() {

        }
    },

    exportar: function() {

    },

    // Este método oculta al de la superclase
    addItem : function (item) {
        // Si quiero que se invoque el de la superclase debo invocarlo explícitamente
        MyApp.model.facturacion.FacturaElectronica.superclass.addItem.call(this,item);


        this.items.push(item);
    }

});
