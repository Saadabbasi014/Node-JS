//const { validateStudent } = require("../models/studentModel");
const teacherModel = require("../models/teacherModel");

module.exports = function(req, res, next) {
    let { error } = teacherModel.validateTeacher(req.body);
    if (error) {
        console.log(error);
        res.status(401).send(error.message);
    }
    next();
};