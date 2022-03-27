const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
})

var Product = mongoose.model("Product", productSchema);

module.exports = Product;