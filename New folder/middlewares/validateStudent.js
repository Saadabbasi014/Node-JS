//const { validateStudent } = require("../models/studentModel");
const studentModel = require("../models/studentModel");

module.exports = function(req, res, next) {
    let { error } = studentModel.validateStudent(req.body);
    if (error) {
        console.log(error);
        res.status(401).send(error.message);
    }
    next();
};