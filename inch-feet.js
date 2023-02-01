function convertToFeet (inch) {
    let feet = inch / 12;
    return feet;
}

let inchToFeetConverter = convertToFeet (24);
console.log (inchToFeetConverter);