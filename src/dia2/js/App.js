var App;
App = {
    copy:function (dest, source) {
        // Con los corchetes podemos hacer reflexion
        for (var key in source) { dest[key] = source[key]; }
        return dest;
    },

    define : function(name, config) {
        var cons = config.init || function() {};

        // La borramos porque no queremos que este como una funcion mas (va a ser nuestro constructor)
        delete config.init;




        App.copy(cons.prototype, config);

        window[name] = cons;

    }



};
