var bd = require('./bd')

const Carro = bd.sequelize.define('carros', {

    modelo:{
        type:bd.Sequelize.STRING
    },
    placa:{
        type:bd.Sequelize.STRING

    }

} )

module.exports = Carro