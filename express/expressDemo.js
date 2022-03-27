console.clear();
const express = require("express");
const app = express();
const products = ["laptop", "LCD", "Mobile"];

app.get('/', function(req, res) {
    res.send("Hello World");
});
// getAlll
app.get("/api/products", function(req, res) {
    res.send(products);
});
//getOne
app.get("/api/products/:index", function(req, res) {
    if (!products[req.params.index])
        return res.status(400).send("Products not found");
    res.send(products[req.params.index]);
});
//update
app.put("/api/products/:index", function(req, res) {
    //  console.log(req.body);
    products[req.params.index] = req.body.name;
    res.send(products[req.params.index]);
});
//delete
app.delete("/api/products/:index", function(req, res) {
    products.splice(req.params.index, 1)
    res.send(products);
});
//create
app.post("/api/products", function(req, res) {
    products.push(req.body.name);
    res.send(products);
});

app.listen(3000);