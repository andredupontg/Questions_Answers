const passport = require("passport");
const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarSignUp = (req, res) => {
    res.render("log_sign",{log_sign: "Registrarse", action: "/signUp"});
}

const crearUsuario = (req, res) => {
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if(!err){
            passport.authenticate("local")(req, res, function(){
                res.redirect("/authQuestions");
            });
        } else{
            res.redirect("/signUp");
        }
    });
}

module.exports = {
    mostrarSignUp, 
    crearUsuario
}