/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 13:00
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.store.Tweets', {
    extend : 'Ext.data.Store',
    model : 'MyApp.model.Tweet',
    proxy : {
        type : 'jsonp',
        url : 'http://search.twitter.com/search.json?q=extjs&include_entities=true&result_type=recent',
        reader : {
            type : 'json',
            root : 'results'
        }
    }
});