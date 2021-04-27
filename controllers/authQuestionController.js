const pregunta = require("../models/pregunta");
const Question = pregunta.Question;
const respuesta = require("../models/respuesta");
const Answer = respuesta.Answer;
const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarPreguntaRespuesta = (req, res) => {
    if(req.isAuthenticated()){
        const parametro = req.params.pregunta;
        const pregunta = parametro.substring(1, parametro.length);
        Question.findOne({title: pregunta}, (err, questionFound) => {
            if(!err){
                if(questionFound){
                    Question.findOne({title: pregunta}, (err, questionFound) => {
                        if(!err){
                            if(questionFound){
                                Answer.find({question: questionFound}, (err, answersFound) => {
                                    if(!err){
                                        res.render("authQuestion", {question: questionFound, answers: answersFound});
                                    } else{
                                        res.send(err);
                                    }
                                });
                            } else{
                                res.send("No existe esa pregunta!");
                            }
                        } else{
                            res.send(err);
                        }
                    });
                } else{
                    res.send("No existe esa pregunta!");
                }
            } else{
                res.send(err);
            }
        });
    } else{
        res.redirect("/logIn");
    }
}

const responderPregunta = (req, res) => {
    if(req.isAuthenticated()){
        User.findOne({username: req.body.username}, (err, userFound) => {
            if(!err){
                if(userFound){
                    const titulo = req.body.title;
        const content = req.body.content;
        Question.findOne({title: titulo}, (err, questionFound) => {
            if(!err){
                if(questionFound){
                    Answer.findOne({content: content}, (err, answerFound) => {
                        if(!err){
                            if(!answerFound){
                                if(questionFound.user.username != req.body.username){
                                    const answer = new Answer({
                                        question: questionFound,
                                        user: userFound,
                                        content: content.substring(3, content.length - 6)
                                    });
                                    answer.save();
                                    res.redirect("/authQuestions");
                                } else{
                                    res.redirect("/authQuestions");
                                }
                            } else{
                                res.send("Ya existe esa misma respuesta!");
                            }
                        } else{
                            res.send(err);
                        }
                    });
                } else{
                }
            } else{
                res.send(err);
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
    mostrarPreguntaRespuesta,
    responderPregunta
}