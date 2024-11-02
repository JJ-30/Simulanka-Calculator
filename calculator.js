// Variables that wait for the user to insert and confirm numbers, beginning as empty string values and being converted into integer values for calculation.
var numberA = ''
var numberB = ''

// Var n used to track what numbers the user selects, and var numberA and numberB.
var n = ''
const b = false

// Counter variable to
numbers = 0



// These functions pushes the number the user wants to calculate into, in order of pushElementA -> pushElementB. This uses button disabling and enabling to prevent users
// from reaccessing numbers that were already inserted.
let pushElementA = () => {
    if (numbers > 1) {
        let obj1 = document.getElementById("test");
        obj1.innerHTML = "You have exceeded the maximum numbers, please reset or choose a calculation method."} else 
        { 
            numberA += n;
            numberA == Number(numberA);
            n = '';
            b == true;
            var btn = document.getElementById("buttonB");
            btn.disabled = false;
            var btn = document.getElementById("buttonA");
            btn.disabled = true;
        }
}
let pushElementB = () => {
    if (numbers > 1) {
        let obj1 = document.getElementById("test");
        obj1.innerHTML = "You have exceeded the maximum numbers, please reset or choose a calculation method."} else 
        { 
            numberB += n;
            numberB == Number(numberB);
            n == '';
            var btn = document.getElementById("buttonB");
            btn.disabled = true;
        }
}



// Listens to whenever a user clicks a number to display it on the textfield, checking the button status to display in number A or number B.
let displayNumbers = () => {
    let numberX = document.getElementById("numberA")
    let numberY = document.getElementById("numberB")
    var btn = document.getElementById("buttonB");
    if (btn.disabled == true) {
        numberX.innerHTML = n;
    } else if (btn.disabled == false) {
        numberY.innerHTML = n;
    } else {numberB.innerHTML = "Your second number"}
}

// Basic calculation functions start
let multiply = () => {
    let m = numberA * numberB;
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let divide = () => {
    let m = numberA / numberB;
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let subtract = () => {
    let m = numberA - numberB;
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}

let add = () => {
    let m = Number(numberA) + Number(numberB);
    let obj1 = document.getElementById("test");
    obj1.innerHTML = m
}
// Basic calculation functions end

// Resets entire calculator history to redo calculations
let reset = () => {
    numberA = ''
    numberB = ''
    n = ''
    let obj1 = document.getElementById("test");
    let numberX = document.getElementById("numberA")
    let numberY = document.getElementById("numberB")
    obj1.innerHTML = "Result"
    numberX.innerHTML = "Your first number";
    numberY.innerHTML = "Your second number";
    numbers = 0
    var btn = document.getElementById("buttonB");
    btn.disabled = true;
}