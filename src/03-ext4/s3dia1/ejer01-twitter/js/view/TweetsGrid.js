/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 19:37
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.view.TweetsGrid', {
    extend : "Ext.grid.Panel",

    store : 'MyApp.store.Tweets',

    stateful: false,
    stateId: 'stateGrid',
    columns: [
        {
            text : 'usuario',
            dataIndex : 'from_user'
        } , {
            text : 'tweet',
            dataIndex : 'text',
            width: 600
        } , {
            text : 'fecha',
            dataIndex : 'created_at',

        } , {
            dataIndex: 'profile_image_url',
            renderer: function(value) {
                return Ext.String.format('<img src="{0}" />', value);
            }
        }
    ],


    title: 'Tweets',
    viewConfig: {
        stripeRows: true
    }
});