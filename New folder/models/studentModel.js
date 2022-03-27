const mongoose = require("mongoose");
const Joi = require("joi");
const bcryptjs = require("bcryptjs");
const _ = require("lodash")

var studentSchema = mongoose.Schema({
    name: String,
    rollNo: Number,
    email: String,
    password: String
});
studentSchema.statics.validateStudent = (data) => {
    const joiSchema = Joi.object({
        name: Joi.string().min(3).max(10),
        rollNo: Joi.number().min(1).max(3),
        email: Joi.string().email(),
        password: Joi.string().min(6).max(14),
    });
    return joiSchema.validate = (data, { abortEarly: false });
}

studentSchema.methods.generatePasswordHash = async function(password) {

    let salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(password, salt);
}

const studentModel = mongoose.model("studentModel", studentSchema);

module.exports = studentModel;
//module.exports.validateStudent = validateStudent;