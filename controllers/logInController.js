const usuario = require("../models/usuario");
const User = usuario.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;


const mostrarLogIn = (req, res) => {
    res.render("log_sign",{log_sign: "Iniciar Sesion", action: "/logIn"});
}

const verificarUsuario = (req, res) => {
    User.findOne({username: req.body.username}, (err, userFound) => {
        if(!err){
            if(userFound){
                bcrypt.compare(req.body.password, userFound.password, (err, result) => {
                    if(!err){
                        if(result === true){
                            res.redirect("/authQuestions");
                        } else{
                            res.send("Contraseña incorrecta!");
                        }
                    } else{
                        res.send(err);
                    }
                });
            } else{
                res.send("Este usuario no existe!");
            }
        } else {
            res.send(err);
        }
    });
}

module.exports = {
    mostrarLogIn, 
    verificarUsuario
}