const mongoose = require("mongoose");
const Joi = require("joi");

var teacherSchema = mongoose.Schema({
    name: String,
    course: String,
    email: String,
    password: String
})

const validateTeacher = (data) => {
    const joiSchema = joi.object({
        name: joi.String().min(3).max(10),
        email: joi.String().min(3).max(10).require(),
        password: joi.String().min(3).max(10).require(),
    })
    return joiSchema.validate(data, { abortEarly: false });
}


var Teacher = mongoose.model("Teacher", teacherSchema);

module.exports.Teacher = Teacher;
module.exports.validateTeacher = validateTeacher;