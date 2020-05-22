const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/carro2",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("Mongo conectado com sucesso !!!!")
}).catch((erro)=>{
    console.log("Erro com a conexao Mongo" + erro)
})

const carro2s = mongoose.Schema({

        modelo:{
            type: String,
            require: true
        },
        placa:{
            type: String,
            require: true
        }
})

mongoose.model('carros2', carro2s);

const gol = mongoose.model('carros2')

new gol({

    modelo:"GOL-GTX",
    placa: "123"

}).save().then(()=>{

    console.log("Salvo com sucesso")

}).catch((erro)=>{

    console.log("Erro ao salvar"+ erro)

})




