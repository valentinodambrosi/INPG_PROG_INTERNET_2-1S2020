var express = require('express');
var app = express();

app.set('view engine', 'ejs');

function formatarValor(entrada){
    return entrada.toUpperCase();
}



app.get('/' , function(req,res){

    var nome = "Valentino";
    res.render('./home/index', {nomeview:nome });

} );

app.get('/cliente/:nome' , function(req,res){

    var nome = req.params.nome;
    res.render('./home/index', {nomeview:nome});

} );

app.get('/sobre' , function(req,res){

    res.send(
        "<h1>Aula de Node.js</h1>"+
        "<h2>Rotas com express</h2>" 
    );

} );

app.get('/lista' , function(req,res){

    var lista = ['Banana', 'Maça', 'Abacate', 'Melão'];
    res.render('./admin/lista', {listaview:lista, formatarValor:formatarValor});

} );


app.get('/cliente/:nome/:telefone/:email' , function(req,res){


    res.send(

        "Nome: " + req.params.nome +"<br>"+ 
        "Email: " + req.params.email +"<br>"+
        "Telefone: " + req.params.telefone


    );
    

} );


app.get('/cliente/:nome/:telefone/' , function(req,res){


    res.send(

        "Nome: " + req.params.nome +"<br>"+ 
        "Telefone: " + req.params.telefone


    );
    

} );




app.listen(3000, function(){

        console.log("Servidor OK .... Porta 3000");

});