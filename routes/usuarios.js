module.exports = function(app){

    var usuarios = app.controllers.usuarios;

    app.route('/usuarios').get(usuarios.index);
    app.route('/usuarios/create').get(usuarios.create)
}