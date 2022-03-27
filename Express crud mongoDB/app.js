const express = require("express");
const { use } = require("express/lib/application");
const app = express();
const mongodb = require("./mangodb");
const Product = require("./models/Product");
const port = process.env.PORT || 8083;

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from DB");

});

app.post("/Product", (req, res) => {
    // res.send("hello from DB");
    console.log(req.body);
    const user = new Product(req.body);
    user.save().then(() => {
            res.status(201).send(user);
        })
        .catch((e) => {
            res.status(400).send(e)
        });
})

app.listen(port, () => {
    console.log(`connection is setup at ${port} `);
})