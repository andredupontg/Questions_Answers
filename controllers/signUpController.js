const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarSignUp = (req, res) => {
    res.render("log_sign",{log_sign: "Registrarse", action: "/signUp"});
}

const crearUsuario = (req, res) => {
    User.findOne({username: req.body.username}, (err, userFound) => {
        if(!err){
            if (!userFound){
                const user = new usuario.User({
                    username: req.body.username,
                    password: req.body.password
                });
                user.save();
                res.send("Usuario creado");
            } else{
                res.send("El usuario ya existe!");
            }
        } else {
            res.send(err);
        }
    });
}

module.exports = {
    mostrarSignUp, 
    crearUsuario
}