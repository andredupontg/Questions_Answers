const usuario = require("../models/usuario");
const User = usuario.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const mostrarSignUp = (req, res) => {
    res.render("log_sign",{log_sign: "Registrarse", action: "/signUp"});
}

const crearUsuario = (req, res) => {
    User.findOne({username: req.body.username}, (err, userFound) => {
        if(!err){
            if (!userFound){
                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    if(!err){
                        const user = new usuario.User({
                            username: req.body.username,
                            password: hash
                        });
                        user.save();
                        res.redirect("/authQuestions");
                    } else{
                        res.send(err);
                    }
                });
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