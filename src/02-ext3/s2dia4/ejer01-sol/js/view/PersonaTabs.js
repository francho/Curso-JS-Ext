/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 16/02/12
 * Time: 10:09
 * To change this template use File | Settings | File Templates.
 */


Ext.ns('MyApp.view');

MyApp.view.PersonaTabs=Ext.extend(Ext.TabPanel, {
    activeTab: 0,

    initComponent: function() {

        this.personasGrid = new MyApp.view.PersonasGrid({
            region : 'center'
        });
        this.personaForm = new MyApp.view.PersonaForm( {
            region : 'east',
            width : 250
        });

        this.items= [{
            title : 'Usuarios',
            layout : 'border',

            items : [
                this.personasGrid,
                this.personaForm
            ]

        }];


        MyApp.view.PersonaTabs.superclass.initComponent.call(this);
    }
});
