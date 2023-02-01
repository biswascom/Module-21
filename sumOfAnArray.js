let array = [22, 45, 33, 54, 99, 35, 35, 22, 25];



function sumOfAnArray (numbers) {

    let sum = 0;
    
    for (i = 0; i < numbers.length; i++) {
        let arrayValue = numbers[i];
        sum = sum + arrayValue;
        // console.log (arrayValue, sum);
    }
    return sum;
}

let totalOfAnArray = sumOfAnArray (array);

console.log (totalOfAnArray);