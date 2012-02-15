/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 16:37
 * To change this template use File | Settings | File Templates.
 */


Ext.ns('MyApp.view');

MyApp.view.PersonasViewPort = Ext.extend(Ext.Viewport, {
    layout: 'border',

    initComponent: function(){
        var me = this;

        this.grid = new MyApp.view.PersonasGrid();
        this.grid.on("rowclick", this.cargaFormulario, this);

        this.editPanel = new MyApp.view.EditarPersonaPanel();
        this.editPanel.on("BotonOk", this.guardarDatos, this);
        this.editPanel.on("BotonBorrar", this.borrarDatos, this);


        this.items = [
            {
                title: 'persona',
                region: 'east',
                items: this.editPanel,
                width: 300
            } , {
            region: 'center',

            border: false,
            margins: '0 0 5 0',
            items : this.grid
        }];

        MyApp.view.PersonasViewPort.superclass.initComponent.call(this);
    },

    guardarDatos: function(form, values) {
        console.log("guardando datos");

        if(values) {
            var store = this.grid.getStore();
            var persona = new store.recordType(values);

            store.add(persona);
        }
    },

    borrarDatos: function(form, values) {
        console.log("borrando datos");



        // http://docs.sencha.com/ext-js/3-4/#!/api/Ext.MessageBox
        Ext.Msg.confirm("Eliminar","¿Estas seguro de borrar estas personas?", function(btn,txt) {
            if(btn=='yes') {
                var selected = this.grid.getSelectionModel().getSelected();
                if(!selected) {return}
                var store = this.grid.getStore();

                store.remove(selected);

                this.editPanel.myForm.getForm().reset();
            }
        }, this);

    },

    cargaFormulario: function() {
        console.log("cargando datos");

        var selected = this.grid.getSelectionModel().getSelected();
        if(!selected) { return; }

        this.editPanel.myForm.getForm().loadRecord(selected);
    }





});