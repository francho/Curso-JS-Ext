/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 17/02/12
 * Time: 11:34
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.data.ProductoDeportivo',{
    // extend : 'MyApp.data.Producto',
    extend : 'Ext.panel.Panel',

    // Si moviéramos la clase de sitio, para no tener que tocar nuestro código podemos definirle un nombre
    // alternativo
    alternateClassName : 'MyApp.model.ProductoDep',

    // Los alias permiten definir el nombre con el cual podemos instanciarlo de forma literal. Será nuestro xtype
    // Debo indicar primero
    alias : 'widget.productodeportivo',


    // Para invocar un preprocesador que se encarga de cargar lo que necesitamos
    // Para que funcione necesito que se siga la estructura de carpetas por paquete (similar a java)

    requires : [
        'MyApp.data.Perecederos'
    ] ,

    initComponent : function() {
        // La clase Component me facilita la creación
        // Define una plantilla Ext a usar en esta clase
        this.tpl = [
            '<h1>{nombre}</h1>',
            '<p>Precio: {precio}</p>',
            '<p>{descripcion}</p>',
            '<ul>',
            '<tpl for="colores"><li>{color}</li></tpl>',
            '</ul>',
            '<p>{precio}</p>'
        ];

        // Necesitamos definir los campos usados en la plantilla
        this.data = {
            nombre : 'Bañador',
            precio : 12.2,
            descripcion: 'Bañador de caballero',
            colores : [
                { color: 'rojo'},
                { color: 'verde'},
                { color: 'amarillo'}
            ]
        };
        
        this.callParent();        
    }
});
