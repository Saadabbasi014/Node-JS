console.clear();

const express = require("express");
//const { default: mongoose } = require("mongoose");
const app = express();
const Person = require("./models/Product");
app.listen(8081);
const mongoose = require("mongoose");
const Product = require("./models/Product");
mongoose.
connect("mongodb://localhost/JamiaDB")
    .then(async() => {

        //*******Create*********/
        // console.log("DB Connected");
        // let Perfume = new Product();
        // Perfume.name = "Royle Musk";
        // Perfume.brand = "Globlal";
        // Perfume.prise = 1750;
        // await Perfume.save();

        // let Perfume = new Product();
        // Perfume.name = "Desire";
        // Perfume.brand = "Globlal";
        // Perfume.prise = 2750;
        // await Perfume.save();

        /********Find*******/
        let result = await Product.find();
        console.log(result);

        /*******Update*******/
        // let result = await Product.findByIdAndUpdate("622ce899c49c07475fbfd34d", {

        //     name: "Royle Musk",
        //     brand: "Globlal",
        //     prise: 2150,
        // });


        //*****************Delete******************/
        // let result = await Product.findByIdAndDelete("622cee21ae0b92f4c4fc14f3");
        // console.log(result);

    })
    .catch((error) => {
        console.log("Error connecting DB");
        console.log(error);
    })