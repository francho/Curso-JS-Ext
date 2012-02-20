/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 10:51
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.model.Animal', {
    extend : 'Ext.data.Model',

    idProperty : 'id',

    // Defino los campos que va a tener mi modelo
    // Por defecto son string (a no ser que especifique un type)
    fields : [
        'nombre',
        'raza',
        {
            name:'edad',
            type: 'float',
            // convert permite definir una funcion que será la encargada de asignar un valor a este campo
            convert : function(value, record) {
                var today = new Date(),
                    nac = record.get('fechanac'),
                    edad = (today - nac) / (365 * 24 * 60 * 60 * 1000);

                return edad.toFixed(2);
            },
            persist : false
        }, {
            name:'fechanac',
            type:'date',
            dateFormat : 'd-m-Y',
            mapping:'nacimiento'  // si campo de entrada no se llama igual podemos mapearlo
        },
        'genero'

    ],

    // Prodremos usarlar luego con isValid() o validate()
    validations : [
        { field: 'age', type: 'presence' },
        { field: 'raza', type: 'presence' },
        { field: 'genero', type: 'inclusion', list: ['F','M']}
    ]
});

