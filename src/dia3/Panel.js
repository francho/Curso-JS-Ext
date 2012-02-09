/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 9/02/12
 * Time: 12:41
 * To change this template use File | Settings | File Templates.
 */

App.define('Panel', {
    init:function (options) {
        // Establecemos las propiedades que nos pasan en la llamada al constructor
        App.copy(this, options || {});

        // Buscamos el destino
        var padre = Ext.DomQuery.select('#' + this.renderTo);

        for (var i = 0, size = padre.length; i < size; i++) {
            // Le añadimos el panel
            var newPanel = Ext.DomHelper.append(padre[i], {
                tag:'div',
                cls:'panel',
                children:[
                    {
                        tag:'h1',
                        html:this.title,
                        cls:'panel-title'
                    },
                    {
                        tag:'p',
                        html:this.content,
                        cls:'panel-content'
                    }
                ]

            });

            // Modificamos la altura y la altura del objeto creado
            Ext.fly(newPanel).setWidth(this.width, true).setHeight(this.height, true);
        }

    }
});
