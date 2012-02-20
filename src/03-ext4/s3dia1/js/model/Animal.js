/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 10:51
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.model.Animal', {
    extend : 'Ext.data.Model',

    // Defino los campos que va a tener mi modelo
    // Por defecto son string (a no ser que especifique un type)
    fields : [
        'nombre',
        'raza',
        { name:'edad', type: 'float' },
        { name:'fechanac', type:'date', dateFormat : 'd-m-Y' },
        'genero',

    ],

    // Prodremos usarlar luego con isValid() o validate()
    validations : [
        { field: 'age', type: 'presence' },
        { field: 'raza', type: 'presence' },
        { field: 'genero', type: 'inclusion', list: ['F','M']}
    ]
});

