console.clear();
const express = require("express");
const app = express();
const Person = require("./Model/person");

app.listen(8080);
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/JamiaDB", { useNewUrlParser: true })
    .then(async() => {
        console.log("DB Connected ");
        //******* */ find *******
        // result = await Person.find({
        //    name: "My Human",
        //  age: 44,
        //   });
        // console.log(result);
        //*******create*********
        let myHuman = new Person();
        // myHuman.name = "My Human";
        // myHuman.age = 44;
        // myHuman.gender = true;

        // await myHuman.save();
        //  console.log(myHuman);
        //*******update*********
        // let result = await Person.findByIdAndUpdate("622610cc92cd6e3607ce3df5", {
        //     name: "Human",
        //     age: 88,
        //     gender: false
        // });

        //**************Delete************** */
        let result = await Person.findByIdAndDelete("622610cc92cd6e3607ce3df5", {

        });
        console.log(result);
    })
    .catch((error) => {
        console.log("DB not Connected ");
        console.log(error.message);
    });