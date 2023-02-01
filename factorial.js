function factorial(numbers) {
    let result = 1;
    for (i = numbers; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

// function factorial (numbers) {
//     let result = 1;
//     for (i = 1; i <= numbers; i++) {
//         result = result * i;
//     }
//     return result;
// }

// function factorial(numbers) {
//     let result = 1;
//     let i = 1;
//     while (i <= numbers) {
//         result = result * i;
//         i++;
//     }
//     return result;
// }

// function factorial(numbers) {
//     let result = 1;
//     let i = numbers;
//     while (i >= 1) {
//         result = result * i;
//         i--;
//     }
//     return result;
// }

let number = 7;
let factor = factorial(number);
console.log("The factorial of ", number, "is", factor);