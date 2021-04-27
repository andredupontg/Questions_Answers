const passport = require("passport");
const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarLogIn = (req, res) => {
    res.render("log_sign",{log_sign: "Iniciar Sesion", action: "/logIn"});
}

const verificarUsuario = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, (err) => {
        if(!err){
            passport.authenticate("local")(req, res, () => {
                res.redirect("/authQuestions");
            });
        } else{
            res.send(err);
        }
    });
}

module.exports = {
    mostrarLogIn, 
    verificarUsuario
}