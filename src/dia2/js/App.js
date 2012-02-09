// francho

var App;
App = {
    copy:function (dest, source) {
        // Con los corchetes podemos hacer reflexion
        for (var key in source) { dest[key] = source[key]; }
        return dest;
    },

    define : function(name, config) {
        var subclass = config.init || function() {};

        // La borramos porque no queremos que este como una funcion mas (va a ser nuestro constructor)
        delete config.init;


        if(config.extend) {
            var superclass = window[config.extend];
            App.copy(subclass.prototype, new superclass());

            subclass.superclass = superclass.prototype;
        }
        subclass.prototype.classname = name;

        App.copy(subclass.prototype, config);

        window[name] = subclass;

    },

    each : function (collection, fn, ctx) {
        var size=collection.length;
        for(var x=0; x<size; x++) {
            fn.call(ctx,collection[x]);

            // Si hubiera parámetros opcionales usaríamos el .apply
        }


    }



};
