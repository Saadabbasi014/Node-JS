var express = require("express");
var router = express.Router();
const studentModel = require("../../models/studentModel");
const bcryptjs = require("bcryptjs");
const config = require("config");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const auth = require("../../middlewares/auth");


//const { validateStudent } = require("../../models/studentModel");


router.post("/signup", async(req, res) => {
    try {
        //await studentModel.deleteMany();
        let result = new studentModel();
        result.name = req.body.name;
        result.email = req.body.email;
        await result.generatePasswordHash(req.body.password);
        // let salt = await bcryptjs.genSalt(10);
        // result.password = await bcryptjs.hash(req.body.password, salt);
        //   result.password = req.body.password;
        result = await result.save();
        result = _.pick(result, ["name", "email", "_id"]);
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
});

router.post("/signin", async(req, res) => {
    try {
        let { email, password } = req.body;
        console.log(req.body)
        let result = await studentModel.findOne({ email: req.body.email });
        console.log(result);
        if (!result) {
            return res.status(404).send("Uer with given emil not found");
        }
        let isValid = await bcryptjs.compare(password, result.password);
        if (!isValid) {
            return res.status(404).send("Invalid password");
        }
        result = _.pick(result, ["name", "email", "_id"]);
        let token = jwt.sign({ id: result._id, name: result.name },
            config.get("jwt"));
        return res.send(token);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
});

router.get("/", async function(req, res) {
    try {
        console.log(req.query);
        const page = Number(req.query.page);
        const perPage = Number(req.query.perPage);
        console.log(page, perPage);

        let result = await studentModel.find();
        return res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/:id", async function(req, res) {
    try {
        let result = await studentModel.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Student with given id not found ");
        }
        res.send(result);
    } catch (error) {
        console.log(error.message);
        //res.status(400).send(error);
        return res.status(400).send("The format of id is not correct");
    }
});

router.post("/", auth, async function(req, res) {
    try {

        let result = new studentModel();
        result.name = req.body.name;
        result.rollNo = req.body.rollNo;
        result.email = req.body.email;
        result = await result.save();
        return res.send(result);
        //res.send(error);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.put("/:id", async function(req, res) {
    try {
        let result = await studentModel.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Student with given id not found ");
        }
        result = await studentModel.findByIdAndUpdate(req.params.id, req.bady, {
            new: true
        });

        return res.send(result);
    } catch (error) {
        console.log(error.message);
        //res.status(400).send(error);
        return res.status(400).send("The format of id is not correct");
    }
});

router.delete("/:id", async function(req, res) {
    try {
        let result = await studentModel.findById(req.params.id);
        if (!result) {
            return res.status(400).send("Student with given id not found ");
        }
        result = await studentModel.findByIdAndDelete(req.params.id);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error.message);
        return res.status(400).send(error);
    }
});

module.exports = router;