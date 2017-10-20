var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser());

var port = process.env.PORT || 3000;

//Rotas
var route = express.Router();

route.get('/', function(req, res){
    res.json({message: 'API node'});
});

app.use('/api', route);

app.listen(port, function(){
    console.log('Servidor rodando na porta: ' + port);
})
