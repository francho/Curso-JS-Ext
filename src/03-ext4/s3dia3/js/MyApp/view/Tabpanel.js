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
    name : 'main',

    createTabIfNotExist : function(obj) {
        var tab = this.query('panel[title='+obj.title+']')[0];

        if(!tab) {
            tab = this.add(obj);
        }

        tab.show();

        return tab;
    }
});
