/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 17:39
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.EditarPersonaPanel =  Ext.extend(Ext.Panel, {
    autoWidth: true,
    autoHeight: true,

    initComponent: function(){
        var me = this ;
        me.myForm = new MyApp.view.PersonaForm( {
            padding: 5,
            autoWidth: true,
            autoHeight: true
        });

        this.addEvents(['BotonOk', 'BotonBorrar']);

        this.items = [ this.myForm ];

        // Form config
        this.btnOk = new Ext.Button({text : "Ok", handler : me.onBtnOk , scope: this});
        this.btnBorrar = new Ext.Button({text : "Borrar" , handler : me.onBtnBorrar, scope : this});

        this.bbar = [ this.btnOk, "->", this.btnBorrar ];

        MyApp.view.EditarPersonaPanel.superclass.initComponent.call(this);
    } ,

    onBtnOk: function() {
        var values = this.myForm.getForm().getValues();

        this.fireEvent('BotonOk', this, values);
    },

    onBtnBorrar: function() {
        var values = this.myForm.getForm().getValues();

        this.fireEvent('BotonBorrar', this, values);
    }


});
