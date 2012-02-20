/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 10:51
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.model.Pwd', {
    extend : 'MyApp.data.Model',

    // Defino los campos que va a tener mi modelo
    // Por defecto son string (a no ser que especifique un type)
    fields : [
        'pwd',
        'pwd2'
    ],

    // Prodremos usarlar luego con isValid() o validate()
    validations : [

        { field: 'pwd2', type: 'claveRepetida', fieldRelacionado:'pwd' }
    ]
});

// Necesitamos añadir una funcion y una propiedad para poder comprobar el valor
Ext.apply(Ext.data.validations, {
    claveRepetidaMessage : 'La clave no coincide',
    claveRepetida        : function(config, value, record) {
        var pwd1 = record.get(config.fieldRelacionado);
        return value == pwd1;
    }
});
