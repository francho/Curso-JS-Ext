#!/bin/sh

# Para crear un cargador de javascript personalizado


sencha create jsb -a http://francho.fch/src/03-ext4/s3dia3/app.html -p app.jsb3
sencha build -p app.jsb3 -d ./
