const Sequelize = require('sequelize');
const sequelize = new Sequelize('inpg', 'root', '', {
        host:'localhost',
        dialect: "mysql"

} )

sequelize.authenticate().then(function(){ 

    console.log('Conectado com sucesso !!!!');

}).catch(function(erro){

    console.log('Erro ao conectar:' + erro);

})

const Carro = sequelize.define('carros', {

    modelo:{
        type:Sequelize.STRING
    },
    placa:{
        type:Sequelize.STRING

    }

} )

//Carro.sync({force:true})

Carro.create({
    modelo:"CRV",
    placa:"XXX-000"
})

