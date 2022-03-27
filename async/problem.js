console.clear();

function makePizza(flavor) {
    setTimeout(function() {
        console.log("Preparing Pizza");
        return "Prepared" + flavor + "Pizza";
    }, 1000);

    return "Order Recived" + flavor + "Pizza";
}

console.log(makePizza("Tikka "));