/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 14/02/12
 * Time: 17:16
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.ArticulosView = Ext.extend(Ext.DataView,{
    itemSelector : 'div.record-articulo',
    multiSelect  : true,
    overClass    : 'record-over',

    initComponent : function() {
       var me = this;

       me.store = new MyApp.stores.Articulos();

       /*
        * http://docs.sencha.com/ext-js/3-4/#!/api/Ext.DataView
        */
       me.tpl = new Ext.XTemplate(
           '<tpl for=".">', // Itera la colección actual
                '<div class="record-articulo">',
                    '<h2>{nombre}</h2>',
                    '<img src="{imagen}" />',
                    '<p>{descripcion}</p>',
                    '<div class="pvp">{precio}</div>',
                    '<div class="stock">quedan {stock}</div>',
                '</div>',
           '</tpl>'
       );

       MyApp.view.ArticulosView.superclass.initComponent.call(this);
       me.store.load();
   }
});
