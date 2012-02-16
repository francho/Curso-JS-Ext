/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 16/02/12
 * Time: 10:04
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.controller');

MyApp.controller.PersonaTabs=Ext.extend(MyApp.view.PersonaTabs, {

    initComponent: function() {
        var me = this;

        MyApp.controller.PersonaTabs.superclass.initComponent.call(this);

        me.personasGrid.on('rowdblclick', me.loadForm, me);
        me.personaForm.on('guardar', me.saveForm, me);
    },

    loadForm : function(grid, index) {
        var record = grid.getStore().getAt(index);

        // Para que funcione, los campos de record deben llamarse igual que los del formulario
        this.personaForm.getForm().loadRecord(record);

    },

    saveForm : function(form, values) {
         console.log(values);

        var store = this.personasGrid.getStore(),
            rec;

         if(!values.id) {
             // actualizar
             rec = new store.recordType(values);

             store.add(rec);
         } else {
             // actualizar
             rec = store.getById(values.id);

             for(var cmp in values) {
                 rec.set(cmp, values[cmp]);
             }


             //store.set(rec);
         }

        form.getForm().reset();
    }
});