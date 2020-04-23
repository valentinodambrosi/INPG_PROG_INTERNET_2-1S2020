var express = require('express');
var app = express();
var q = require('./area_perimetro');


app.get('/', function(req, res){

    res.send('Olá Mundo ....');

});

app.get('/area', function(req, res){

    res.send('Olá Mundo ....' + q.area(5));

});

app.get('/perimetro', function(req, res){

    res.send('Olá Mundo .... POST'+q.perimetro(6));

});

app.get('/sobre', function(req, res){

    res.send('Aula Node + Express');

});


app.use('/publico', express.static('publico'));


app.listen(3000, function(){
    console.log('Rodando Servidor');

})
