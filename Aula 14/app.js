var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tabelaVirtual = [];

var Carro = require('./modelo/carro');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

function formatarValor(entrada) {
    return entrada.toUpperCase();
}


app.get('/', (req, res) => {

    res.render('./home/form');

})

app.post('/carro/', (req, res) => {

    Carro.create({
        modelo: req.body.modelo,
        placa: req.body.placa
    }).then(function () {

        console.log("Cadastro OK !!!!")

    }).catch(function (erro) {

        console.log("Cadastro KO !!!!")


    })




    // var linhaVirtual = [req.body.id, req.body.modelo, req.body.placa];
    // tabelaVirtual.push(linhaVirtual);



    // CarroDao.inserir(dados);

    //res.render('./home/tabela', { tabelaVirtualView: tabelaVirtual });

    res.redirect('/listarcarro')


})

app.get('/listarcarro', (req, res) => {


    Carro.findAll().then(function (carros) {

        //res.send(carros)
        res.render('./home/tabela2', { carros: carros });

    })



})



app.get('/apagarCarro/:id', (req, res) => {

    Carro.destroy({ where: { id: req.params.id } }).then(function () {

        res.send("Deletado");

    }).catch(function (erro) {

        res.send("erro deletando" + erro);


    })


})


app.listen(3000, function () {

    console.log("Servidor OK .... Porta 3000");

});