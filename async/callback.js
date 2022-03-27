console.clear();

function makePizza(flavor, callback) {
    console.log("Order Recived");
    console.log("Preparing Pizza");

    setTimeout(function() {
        callback(flavor + "Is ready");
    }, 2000);
}

function handlePizza(pizza) {
    console.log("Prepared" + pizza);
}

makePizza("Tikka" + handlePizza);