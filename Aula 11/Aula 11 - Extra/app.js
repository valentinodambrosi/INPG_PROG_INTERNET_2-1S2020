var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){

    res.sendFile(__dirname+"/form.html");

});

app.post('/valor', function(req, res){

    res.send(
        "<h1>First Name:"+req.body.fname + "</h1>"+
        "<h2>Last Name: "+req.body.lname + "</h2>" 
    );

});




app.listen(3000, function(){
    console.log('Rodando Servidor');

})
