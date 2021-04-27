const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const buscarPregunta = (req, res) => {
    const pregunta = req.body.pregunta;
    Question.findOne({title: pregunta}, (err, questionFound) => {
        if(!err){
            if(questionFound){
                res.redirect("/questions/:" + pregunta);
            } else{
                res.send("No existe esa pregunta");
            }
        } else{
            res.send(err);
        }
    });
}

module.exports = {
    buscarPregunta
}