validateStudent = function(req, res, next) {
    console.log("I am in validate Student middle");
    next();
};
module.exports = validateStudent;

// const { validateStudent } = require("../models/Student");

// module.exports = function(req, res, next) {
//     let { error } = validateStudent(req.body);
//     if (error) {
//         res.status(401).send(error.message);
//         console.log(error);
//     }
//     next();
// }