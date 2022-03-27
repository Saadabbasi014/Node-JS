var express = require("express");
var router = express.Router();
const Product = require("../../models/Product")

router.get("/", async function(req, res) {
    try {
        console.log(req.query);
        let result = await Product.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }

    //  res.send("Get all prodects");
});

router.get("/:id", async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            res.status(400).send("Product with given id not found");
        }
        res.send(result);
    } catch (err) {
        console.log(err);
        // res.send(result);
    }
    //  res.send("Get one prodect by id " + req.params.id);
});

router.post("/", async function(req, res) {
    try {
        let result = new Product();
        result.name = res.body.name;
        result.brand = res.body.brand;
        result.price = res.body.price;
        result = await result.save();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.put("/:id", async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            res.status(400).send("The record with given id was not found");
        }
        result = await Product.findByIdAndUpdate(req.params.id, {
            new: true,
        });
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

router.delete("/:id", async function(req, res) {
    try {
        let result = await Product.findById(req.params.id);
        if (!result) {
            res.status(400).send("Product with given id not found");
        }
        result = await Product.findByIdAndDelete(req.params.id)
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;