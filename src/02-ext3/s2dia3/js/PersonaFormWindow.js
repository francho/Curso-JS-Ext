/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 13:13
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.PersonaFormWindow = Ext.extend(Ext.Window, {
    width:300,
    height:200,
    title:'Agregar persona',

    initComponent:function () {
        this.addEvents('guardarForm');

        this.guardarBtn = new Ext.Button({text:'Guardar', handler: this.disparaGuardar, scope: this });
        this.cancelarBtn = new Ext.Button({text:'Cancerlar', handler: this.close, scope: this});

        this.fbar = [this.guardarBtn, this.cancelarBtn];

        this.myForm = new MyApp.view.PersonaForm();

        this.items = [this.myForm];

        MyApp.view.PersonaFormWindow.superclass.initComponent.call(this);
    },

    disparaGuardar: function() {
        var values = this.myForm.getForm().getValues();

        this.fireEvent('guardarForm', this, values); // Mandamos como parametro this para que el listener pueda cerrar la ventana
    }
});

