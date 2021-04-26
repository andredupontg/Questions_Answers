const usuario = require("../models/usuario");
const User = usuario.User;

const crearUsuario = (req, res) => {
    User.findOne({username: req.body.username}, (err, userFound) => {
        if(!err){
            if(!userFound){
                const user = new User({
                    username: req.body.username,
                    password: req.body.password
                });
                user.save();
            } else{
                res.send("El usuario ya existe");
            }
        } else{
            res.send(err);
        }
    });
}

const verificarUsuario = (req, res) => {
    
}