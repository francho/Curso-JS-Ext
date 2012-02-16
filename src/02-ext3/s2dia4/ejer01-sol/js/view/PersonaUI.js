/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 15/02/12
 * Time: 10:20
 * To change this template use File | Settings | File Templates.
 */

Ext.ns('MyApp.view');

MyApp.view.PersonaUI = Ext.extend(Ext.Panel, {

    autoScroll : true,
    title: 'listado de personas',
    width: 400,
    height: 400,

    initComponent: function() {
        // Permitiria usar el this actual dentro de, por ejemplo
        var me = this;

        // Estos elementos seran referenciados por clases hijas
        me.nuevoBtn = new Ext.Button({
            text:'nuevo',
            iconCls: 'icon-add',
            scale:'large', // iconos de 32x32
            iconAlign:'top' // posición del icono
        });
        me.borrarBtn = new Ext.Button({ text:'Borrar', iconCls: 'icon-del', scale:'large',iconAlign:'top'});
        me.filtroTxt = new Ext.form.TextField();
        me.filtrarBtn = new Ext.Button({ text:'Filtrar', iconCls: 'icon-search', scale:'large',iconAlign:'top'});

        me.tbar = [
            me.nuevoBtn,
            ' ', // Espacio en blanco
            me.borrarBtn,
            '| ', // Separador barra
            '->', // Envia lo siguiente alineado a la derecha
            me.filtroTxt,
            ' ', // Espacio en blanco
            me.filtrarBtn];


        me.view = new MyApp.view.PersonasView();
        me.items = [me.view];

        MyApp.view.PersonaUI.superclass.initComponent.call(me);

        me.initEvents();
    },

    initEvents : Ext.emptyFn
});
