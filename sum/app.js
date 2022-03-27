const { sub, mul } = require("./calculator");



const axios = require("axios");

console.log(sub(4, 8));
console.log(mul(4, 8));

axios.get("https://haseeb-apis.herokuapp.com/api/person")
    .then((response) => {
        console.log(response.data[0]);
    })
    .catch((error) => {
        console.log(error.message);
    });