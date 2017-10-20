var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    TImes = require('./models/times');

//Conexão com o mondoDB
mongoose.connect('mondogb://localhost/api', function(err){
    if(err){
        console.log('Erro ao conectar ao mongoDB: '+ err);
    }
})

app.use(bodyParser());

var port = process.env.PORT || 3000;

//Rotas
var route = express.Router();

route.get('/', function(req, res){
    res.json({message: 'API node'});
});

route.router('/times').post()

app.use('/api', route);

app.listen(port, function(){
    console.log('Servidor rodando na porta: ' + port);
})
