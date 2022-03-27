const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: Boolean,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;