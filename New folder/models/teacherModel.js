const mongoose = require("mongoose");
const Joi = require("joi");
const bcryptjs = require("bcryptjs");
const _ = require("lodash")

//const { string } = require("joi");

var teacherSchema = mongoose.Schema({
    name: String,
    email: { type: String, uppercase: true, required: true, index: { unique: true } },
    password: { type: String, required: true },
    role: { type: String, default: "normal" }
})

teacherSchema.statics.validateTeacher = (data) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(3).max(10),
        email: Joi.string().email(),
        password: Joi.string().min(3).max(10),
        role: Joi.string(),
    })
    return joiSchema.validate = (data, { abortEarly: false });
}

teacherSchema.methods.generatePasswordHash = async function(password) {

    let salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(password, salt);
}

const teacherModel = mongoose.model("teacherModel", teacherSchema);

module.exports = teacherModel;