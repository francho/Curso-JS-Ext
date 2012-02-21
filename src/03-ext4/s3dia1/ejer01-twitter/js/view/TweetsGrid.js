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

    autoScroll: true,

    title: 'Tweets',
    viewConfig: {
        stripeRows: true
    },

    stateId: 'stateGrid',

    columns: [
        {
            dataIndex: 'profile_image_url',
            renderer: function(value) {
                return Ext.String.format('<img src="{0}" />', value);
            } ,
            flex: 0.5
        } , {
            text : 'usuario',
            dataIndex : 'from_user',
            flex : 1
        } , {
            text : 'tweet',
            dataIndex : 'text',
            flex: 4
        } , {
            text : 'fecha',
            dataIndex : 'created_at',
            flex: 2
        }
    ]



});