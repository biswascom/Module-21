function evenOrOdd (number) {
    let remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

let myNumberIsEven = evenOrOdd (334);
console.log ("My number is Even:", myNumberIsEven);

let herNumberIsEven = evenOrOdd (233);
console.log ("Her number is Even:", herNumberIsEven);