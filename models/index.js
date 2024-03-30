

// Load ORM
const {Sequelize, Model, DataTypes} = require('sequelize');



const sequelize = new Sequelize("sqlite:quiz.sqlite");

class Quiz extends Model {}

Quiz.init(
    {
        
        question: {
            type: DataTypes.STRING,    
            unique: {msg: "Quiz already exists"}
        }, 
        answer: DataTypes.STRING
    }, 
    {sequelize}
);

module.exports = sequelize; 




