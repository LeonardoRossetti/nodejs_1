module.exports = function(app){

    var HomeController = {

        //Action
        index: function(req, res){
            res.render('home/index');
        }
    }

    return HomeController;
}