var express = require('express');
var router = express.Router();
// const { Student } = require("../../models/Student");

router.get("/", async function(req, res) {
    try {
        let result = await Student.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
})

router.get("/:id", async function(req, res) {
    try {
        let result = await Student.findById(id);
        if (!result) {
            res.status(400).send("Student with given id not found");
        }
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.post("/", async function(req, res) {
    try {
        let result = new Student();
        result.name = req.body.name;
        result.id = req.body.id;
        result.class = req.body.class;
        result.password = req.body.password;
        result = await result.save();
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.put("/:id", async function(req, res) {
    try {
        let result = await Student.findById(req.params.id);
        if (!result) {
            res.status(400).send("Student with given id not found");
        }
        result = await Student.findById(req.params.id, req.body, {
            new: true
        });

        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.delete("/:id", async function(req, res) {
    try {
        let result = await Student.findById(req.params.id);
        if (!result) {
            res.status(400).send("Student with given id not found");
        }
        result = await Student.findByIdAndDelete(req.params.id, );
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.get("/signup", async(req, res) => {
    try {
        let result = new Student();
        result.email = req.body.email;
        result.name = req.body.name;
        let salt = await bcrypt.genSalt(10);
        result.password = await bcrypt.hash(req.body.password, salt);
        result = await result.save();
        result = _.pick(result, ["name", "email"]);
        res.send(result);
    } catch (err) {
        res.status(401).send(err.message);
    }
});
router.get("/signin", async(req, res) => {
    try {
        // let result = new Student();
        let { email, password } = req.body;

        let result = await Student.findOne({ email: email });
        if (!result) {
            return res.status(404).send("Student with given email was not found");
        }

        let isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
            return res.status(404).send("Invalid Password");
        }

        result = _.pick(result, ["name", "email", "role", "_id"]);
        // console.log(await _.omit(result, ["password"]));

        res.send(result);
    } catch (err) {
        res.status(401).send(err.message);
    }
});

module.exports = router;