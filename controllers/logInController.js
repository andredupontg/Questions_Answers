const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarLogIn = (req, res) => {
    res.render("log_sign",{log_sign: "Iniciar Sesion", action: "/logIn"});
}

const verificarUsuario = (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password}, (err, userFound) => {
        if(!err){
            (userFound) ? res.redirect("/authQuestions") : res.send("Este usuario no existe!")
        } else {
            res.send(err);
        }
    });
}

module.exports = {
    mostrarLogIn, 
    verificarUsuario
}