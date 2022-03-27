//const { validateStudent } = require("../models/studentModel");
const teacherModel = require("../models/studentModel");
const jwt = require("jsonwebtoken");
const config = require("config");


module.exports = async function(req, res, next) {
    let token = req.body.token;
    if (!token) {
        return res.status(401).send("Token id not provided");
    }
    let decoded = jwt.decode(token, config.get("jwt"));
    if (!decoded) {
        return res.status(401).send("Token id not valid");
    }
    let user = await teacherModel.findById(decoded._id);
    if (!decoded) {
        return res.status(401).send("Token not found in DB");

    }
    console.log(decoded);
    next();
};