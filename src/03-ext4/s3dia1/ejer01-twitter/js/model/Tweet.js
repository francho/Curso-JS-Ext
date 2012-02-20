/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 20/02/12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */

Ext.define("MyApp.model.Tweet", {
    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        "from_user",
        "from_user_id",
        "from_user_id_str",
        "from_user_name",
        "geo",
        "id",
        "id_str",
        "iso_language_code",
        "metadata",
        "profile_image_url",
        "profile_image_url_https",
        "source",
        "text" ,
        "to_user" ,
        "to_user_id",
        "to_user_id_str" ,
        "to_user_name"
    ]
});
/*
 "results" : [ { "created_at" : "Mon, 20 Feb 2012 17:14:42 +0000",
 "entities" : { "hashtags" : [ { "indices" : [ 19,
 30
 ],
 "text" : "javascript"
 },
 { "indices" : [ 115,
 135
 ],
 "text" : "ComunidadCodificada"
 }
 ],
 "urls" : [ { "display_url" : "is.gd/KDFCzW",
 "expanded_url" : "http://is.gd/KDFCzW",
 "indices" : [ 77,
 97
 ],
 "url" : "http://t.co/R4zSxT9D"
 } ],
 "user_mentions" : [ { "id" : 287550840,
 "id_str" : "287550840",
 "indices" : [ 3,
 17
 ],
 "name" : "1/2ageek",
 "screen_name" : "halfageekinfo"
 } ]
 },
 "from_user" : "4ng3r",
 "from_user_id" : 232919269,
 "from_user_id_str" : "232919269",
 "from_user_name" : "☠ 4ng3r ☠",
 "geo" : null,
 "id" : 171643953001668608,
 "id_str" : "171643953001668608",
 "iso_language_code" : "en",
 "metadata" : { "result_type" : "recent" },
 "profile_image_url" : "http://a0.twimg.com/profile_images/1344225912/34753_10150218624115523_817365522_13818959_1738553_n_normal.jpg",
 "profile_image_url_https" : "https://si0.twimg.com/profile_images/1344225912/34753_10150218624115523_817365522_13818959_1738553_n_normal.jpg",
 "source" : "<a href="http://www.tweetcaster.com" rel="nofollow">TweetCaster for Android</a>",
 "text" : "RT @halfageekinfo: #javascript: ExtJs CSV Import panel and JS UnitTest Panel http://t.co/R4zSxT9D. ... Great +1 !! #ComunidadCodificada",
 "to_user" : null,
 "to_user_id" : null,
 "to_user_id_str" : null,
 "to_user_name" : null
 },

 */