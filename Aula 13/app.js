var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tabelaVirtual = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

function formatarValor(entrada) {
    return entrada.toUpperCase();
}


app.get('/', (req, res) => {

    res.render('./home/form');

})

app.post('/carro/', (req, res) => {

    var linhaVirtual = [req.body.id, req.body.modelo, req.body.placa];
    tabelaVirtual.push(linhaVirtual);

// CarroDao.inserir(dados);

    res.render('./home/tabela', { tabelaVirtualView: tabelaVirtual });

})

app.get('/listarcarro', (req, res) => {

    res.render('./home/tabela');

})



app.listen(3000, function () {

    console.log("Servidor OK .... Porta 3000");

});