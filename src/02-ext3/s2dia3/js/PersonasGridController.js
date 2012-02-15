/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 12:58
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.controller');

MyApp.controller.PersonasGridController = Ext.extend(MyApp.view.PersonasGrid, {
    initComponent: function() {
        var me = this;

        MyApp.controller.PersonasGridController.superclass.initComponent.call(this);

        this.nuevoBtn.on('click', me.muestraForm, this);

    },

    initEvents : Ext.emptyFn,

    muestraForm : function() {
        var win = new MyApp.view.PersonaFormWindow();

        win.on('guardarForm', this.agregarPersona, this);

        win.show();
    },

    agregarPersona: function(win , values) {
        win.close();
        console.log(values);

        var newReg = new this.store.recordType(values);
        this.store.add(newReg);
    }

});
