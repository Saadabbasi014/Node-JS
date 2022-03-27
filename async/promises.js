console.clear();

function makePizza(flavour) {

    return new Promise((resolve, reject) => {
        if (flavour == "fajita")
            return reject("Fajita is out of stack");
        else
            setTimeout(function() {
                console.log("Preparing Pizza");
                resolve(flavour + "Pizza")
            }, 1000);
    });
}

makePizza("Tikka ")
    .then(message => {
        console.log(message);
    })
    .catch();