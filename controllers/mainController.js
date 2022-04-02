const res = require("express/lib/response")

let mainController = {

    home:function(req,re) {
        res.send ("Bienvenido a mi porfolio");
    },
    About: function(req,res){

    }    
}

module.exports =mainController;