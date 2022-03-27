const axios = require("axios");

const getAll = () => {
    axios
        .get("https://haseeb-apis.herokuapp.com/api/person")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};
const getOne = (id) => {

    axios
        .get("https://haseeb-apis.herokuapp.com/api/person" + id)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });

};
const post = (data) => {
    axios
        .put("https://haseeb-apis.herokuapp.com/api/person", data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};
const put = (id, data) => {
    axios
        .post("https://haseeb-apis.herokuapp.com/api/person", +id, data)
        .then((response) => {

            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};
const deleteOne = (id) => {
    axios
        .delete("https://haseeb-apis.herokuapp.com/api/person")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

deleteOne({ id: "621f21425cf997157dc53453" })
    //getAll();
    //post({ name: "abc", age: 33, gender: true, city: "lhr" });