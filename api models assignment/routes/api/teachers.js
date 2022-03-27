var express = require('express');
var router = express.Router();
const { Teacher } = require("../../models/Teacher");

router.get("/", async function(req, res) {
    try {
        let result = await Teacher.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
})

router.get("/:id", async function(req, res) {
    try {
        let result = await Teacher.findById(id);
        if (!result) {
            res.status(400).send("Teacher with given id not found");
        }
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.post("/", async function(req, res) {
    try {
        let result = new Teacher();
        result.name = req.body.name;
        result.course = req.body.course;
        result.email = req.body.email;
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
        let result = await Teacher.findById(req.params.id);
        if (!result) {
            res.status(400).send("Teacher with given id not found");
        }
        result = await Teacher.findById(req.params.id, req.body, {
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
        let result = await Teacher.findById(req.params.id);
        if (!result) {
            res.status(400).send("Teacher with given id not found");
        }
        result = await Teacher.findByIdAndDelete(req.params.id, );
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

router.get("/signup", async(req, res) => {
    try {
        let result = new Teacher();
        result.email = req.body.email;
        result.name = req.body.name;
        let salt = await bcrypt.genSalt(10);
        result.password = await bcrypt.hash(req.body.password, salt);
        result = await result.save();
        result = _.pick(result, ["name", "email", ]);
        res.send(result);
    } catch (err) {
        res.status(401).send(err.message);
    }
});

router.get("/signin", async(req, res) => {
    try {
        // let result = new Teacher();
        let { email, password } = req.body;

        let result = await Teacher.findOne({ email: email });
        if (!result) {
            res.status(404).send("Teacher with given email was not found");
        }

        let isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
            res.status(404).send("Invalid Password");
        }

        result = _.pick(result, ["name", "email", "role", "_id"]);
        // console.log(await _.omit(result, ["password"]));

        res.send(result);
    } catch (err) {
        res.status(401).send(err.message);
    }
});

module.exports = router;