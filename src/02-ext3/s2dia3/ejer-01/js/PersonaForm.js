/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 13:02
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.PersonaForm = Ext.extend(Ext.form.FormPanel, {

    border: false,

    initComponent:function () {
        var me = this;

        me.items = [
            {
                xtype:'textfield',
                name : 'nombre',
                fieldLabel: 'Nombre'
            }, {
                xtype:'textfield',
                name : 'apellido',
                fieldLabel: 'Apellido'
            } , {
                xtype:'numberfield',
                name : 'edad',
                fieldLabel: 'Edad'
            } , {
                xtype:'textfield',
                name : 'genero',
                fieldLabel: 'Genero'
            }
        ];

        MyApp.view.PersonaForm.superclass.initComponent.call(me);

    }
});
