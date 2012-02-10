/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 9/02/12
 * Time: 12:41
 * To change this template use File | Settings | File Templates.
 */

App.define('Panel', {
    extend : Ext.util.Observable,
    init:function (options) {
        // Establecemos las propiedades que nos pasan en la llamada al constructor
        App.copy(this, options || {});

        this.addEvents({
            panelCreated:true,
            panelShowed:true,
            panelClosed:true,
            click:true
        });

        // TODO estudiar la diferencia
        // Panel.superclass.constructor.call(this);
        Panel.superclass.constructor.apply(this, arguments);

        this.panelId = 'panel-' + new Date().getTime();
        this.parentNode = Ext.DomQuery.selectNode('#' + this.renderTo);

        this.fireEvent('panelCreated');
    },

    show:function () {
        if (this.panelVisible) {
            return
        }

        // Buscamos el destino

        var newPanel = Ext.DomHelper.append(this.parentNode, {
            id:this.panelId,
            tag:'div',
            cls:'panel',
            children:[
                {
                    tag:'div',
                    html:this.title,
                    cls:'panel-title'
                },
                {
                    tag:'div',
                    html:this.content,
                    cls:'panel-content'
                }
            ]
        });

        // Modificamos la altura y la altura del objeto creado
        //Ext.fly(newPanel).setWidth(this.width, true).setHeight(this.height, true);
        Ext.fly(newPanel).setSize(this.width, this.height, true);

        // Cuando alguien nos haga click disparamos de nuevo el evento
        // para que nuestros listeners se enteren
        // ¿es la forma de hacerlo?
        Ext.fly(newPanel).addListener("click", function() {
            this.fireEvent('click');
        }, this);

        this.panelVisible = true;

        this.fireEvent('panelShowed');
    },

    close:function () {
        if (!this.panelVisible) {
            return
        }

        var me = Ext.DomQuery.selectNode('#' + this.panelId);

        // this.parentNode.removeChild(me);

        Ext.fly(me).fadeOut({
            opacity:0, //can be any value between 0 and 1 (e.g. .5)
            easing:'easeOut',
            duration:500,
            remove:true,
            useDisplay:false
        });


        this.panelVisible = false;
        this.fireEvent('panelClosed');


    }

})
;
