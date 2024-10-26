var userInput = []
var arrCalculate = []

numbers = 0

let testing = () => {

    let obj1 = document.getElementById("test");
    obj1.innerHTML = parseInt(userInput.join(''), 10);

}


// This function pushes the first number the user wants to calculate into arrCalculate, and allows the user to insert another number.
let pushElement = () => {

    if (numbers > 1) {
        let obj1 = document.getElementById("test");
        obj1.innerHTML = "You have exceeded the maximum numbers, please reset or choose a calculation method."} else 
        { arrCalculate.push(parseInt(userInput.join(''), 10));
            userInput = [] }
    displayNumbers()

}

let displayNumbers = () => {
    let numberA = document.getElementById("numberA")
    let numberB = document.getElementById("numberB")
    if (numberA.innerHTML = "Your first number") {
        numberA.innerHTML = arrCalculate[0]
    }
    if (numberA.innerHTML != "Your first number" && arrCalculate.length > 1) {
        numberB.innerHTML = arrCalculate[1]
    } else {numberB.innerHTML = "Your second number"}
}

let multiply = () => {
    let m = arrCalculate[0] * arrCalculate[1];
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let divide = () => {
    let m = arrCalculate[0] / arrCalculate[1];
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let subtract = () => {
    let m = arrCalculate[0] - arrCalculate[1];
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let add = () => {
    let m = arrCalculate[0] + arrCalculate[1];
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let reset = () => {
    userInput = []
    arrCalculate = []
    let obj1 = document.getElementById("test");
    let numberA = document.getElementById("numberA")
    let numberB = document.getElementById("numberB")
    obj1.innerHTML = "Result"
    numberA.innerHTML = "Your first number";
    numberB.innerHTML = "Your second number";
    numbers = 0
}