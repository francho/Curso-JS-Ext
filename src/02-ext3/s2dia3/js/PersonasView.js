/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 14/02/12
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.PersonasView = Ext.extend(Ext.DataView,{
    itemSelector : 'div.record-persona',
    multiSelect  : true,
    overClass    : 'record-over',
    selectedClass: 'record-selected',


    initComponent : function() {
       var me = this;

       me.store = new MyApp.stores.Personas();

       /*
        * http://docs.sencha.com/ext-js/3-4/#!/api/Ext.DataView
        */
       me.tpl = new Ext.XTemplate(
           '<tpl for=".">', // Itera la colección actual
                '<div class="record-persona">',
                    '<h2>{nombre} {apellido}</h2>',
                    '<p>Edad: {edad}, Género: {genero}</p>',
                '</div>',
           '</tpl>'
       );

       MyApp.view.PersonasView.superclass.initComponent.call(this);
       me.store.load();
   }
});
