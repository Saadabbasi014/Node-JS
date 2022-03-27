const mongoose = require("mongoose");
const Joi = require("joi");

var studentSchema = mongoose.Schema({
    name: String,
    rollNo: Number,
    class: String,
    email: String,
    password: String
})

const validateStudent = (data) => {
    const joiSchema = joi.object({
        name: joi.String().min(3).max(10),
        email: joi.String().min(3).max(10).require(),
        email: joi.String().min(3).max(10).require(),
    })
    return joiSchema.validateStudent(data, { abortEarly: false });
}

var Student = mongoose.model("Student", studentSchema);

module.exports.Student = Student;
module.exports.validateStudent = validateStudent;