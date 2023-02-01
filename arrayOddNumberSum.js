let array = [25, 33, 44, 53, 35, 97, 67, 97, 34, 13, 40];

let sum = 0;

function arrayOddNumberSum (numbers) {
    for (i = 0; i < numbers.length; i++) {
        let arrayValue = numbers[i];
        let remainder = arrayValue % 2; 
        if (remainder === 0) {
            continue;
        }
        else {
            sum = sum + arrayValue;
        }
    }
    return sum;
}

let oddTotal = arrayOddNumberSum (array);
console.log (oddTotal);