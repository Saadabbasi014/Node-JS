const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/JamiaDB")
    .then(async() => {
        console.log("DB connected");
    }).catch((error) => {
        console.log("Error connecting db");
        console.log(error.message);
    });