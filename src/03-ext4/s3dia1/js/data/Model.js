/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 12:38
 * To change this template use File | Settings | File Templates.
 */

/**
 * Defino un modelo propio para poder añadir funcionalidad al modelo de la librería
 */
Ext.define('MyApp.data.Model', {
    extend : 'Ext.data.Model',


    /**
     * Validates the current data against all of its configured {@link #validations}.
     * @return {Ext.data.Errors} The errors object
     */
    validate: function() {
        var errors      = Ext.create('Ext.data.Errors'),
            validations = this.validations,
            validators  = Ext.data.validations,
            length, validation, field, valid, type, i;

        if (validations) {
            length = validations.length;

            for (i = 0; i < length; i++) {
                validation = validations[i];
                field = validation.field || validation.name;
                type  = validation.type;

                // Voy a pasar la instancia del modelo para poder comprobar en relacion a otros campos
                // valid = validators[type](validation, this.get(field));
                valid = validators[type](validation, this.get(field), this);

                if (!valid) {
                    errors.add({
                        field  : field,
                        message: validation.message || validators[type + 'Message']
                    });
                }
            }
        }

        return errors;
    }
});