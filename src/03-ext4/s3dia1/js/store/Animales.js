/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 13:00
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.store.Animales', {
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Animal',
    proxy : {
        type : 'ajax',
        url : 'serverside/animales.json',
        reader : {
            type : 'json',
            root : 'data',

            // opcionales
            successProperty : 'success',
            totalProperty : 'total'
        }
    }
});