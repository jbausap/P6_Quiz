
// Definition of the Quiz model:

module.exports = function (sequelize, DataTypes) {

    sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            }
        });
    sequelize.sync()
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if(!count) {
            return sequelize.models.quiz.bulkCreate([
                { question: "Capital de Italia", answer : "Roma" },
                { question: "Capital de Francia", answer : "París" },
                { question: "Capital de España", answer : "Madrid" },
                { question: "Capital de Portugal", answer : "Lisboa" }
            ]);
        }
    })
    .catch(error => {
        console.log(error);
    });
    return sequelize;
};
