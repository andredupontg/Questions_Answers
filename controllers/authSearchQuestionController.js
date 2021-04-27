const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const buscarPregunta = (req, res) => {
    if(req.isAuthenticated()){
        const pregunta = req.body.pregunta;
        Question.findOne({title: pregunta}, (err, questionFound) => {
            if(!err){
                if(questionFound){
                    res.redirect("/authQuestions/:" + pregunta);
                } else{
                    res.send("No existe esa pregunta");
                }
            } else{
                res.send(err);
            }
        });
    } else{
        res.redirect("logIn");
    }
}

module.exports = {
    buscarPregunta
}