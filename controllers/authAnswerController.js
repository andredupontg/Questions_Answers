const pregunta = require("../models/pregunta");
const Question = pregunta.Question;
const respuesta = require("../models/respuesta");
const Answer = respuesta.Answer;
const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarRespuesta = (req, res) => {
    if(req.isAuthenticated()){
        const parametro = req.params.respuesta;
        const id_respuesta = parametro.substring(1, parametro.length);
        Answer.findOne({_id: id_respuesta}, (err, answerFound) => {
            if(!err){
                res.render("authAnswer", {answer: answerFound});
            } else{
                res.send(err);
            }
        });
    } else{
        res.redirect("/logIn");
    }
}

const marcarRespuesta = (req, res) => {
    if(req.isAuthenticated()){
        User.findOne({username: req.body.username}, (err, userFound) => {
            if(!err){
                if(userFound){
                    Question.findOne({user: userFound}, (err, questionFound) => {
                        if(!err){
                            if(questionFound){
                                const contenido = req.body.content;
                                Answer.update({content: contenido}, {$set: {correct: true}},{overwrite: true}, (err) => {
                                    (err) ? res.send(err) : res.redirect("/authQuestions");
                                });
                            } else{
                                res.send("No existe dicha pregunta!");
                            }
                        } else{
                            res(err);
                        }
                    });
                } else{
                    res.send("El usuario no existe!");
                }
            } else{
                res.send(err);
            }
        });
    } else{
        res.redirect("/logIn");
    }
}

module.exports = {
    mostrarRespuesta,
    marcarRespuesta
}