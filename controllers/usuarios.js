module.exports = function(app){


    var UsuarioController = {
        index: function(req, res){
            res.render('usuarios/index');
        },
        create: function(req, res) {
            res.render('usuarios/create');
        }
    }

    return UsuarioController;
}