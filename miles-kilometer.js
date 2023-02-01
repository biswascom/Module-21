function milesToKilometer (miles) {
    let kilometer = miles * 1.609;
    return kilometer;
}

let convertToKilometer = milesToKilometer (3);
console.log (convertToKilometer);