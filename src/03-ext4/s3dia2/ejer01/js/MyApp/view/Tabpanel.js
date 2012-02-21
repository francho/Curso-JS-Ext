/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 21/02/12
 * Time: 13:51
 * To change this template use File | Settings | File Templates.
 */

Ext.define('MyApp.view.Tabpanel', {
    extend : 'Ext.tab.Panel',


    alias : 'widget.MyTabpanel',


    createTabIfNotExist : function(title) {
        var tab = this.query('panel[title='+title+']')[0];

        if(!tab) {
            tab = this.add([{title: title}]);
            tab = this.query('panel[title='+title+']')[0];
        }

        this.setActiveTab(tab);
    }
});
