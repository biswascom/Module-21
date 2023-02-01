function isLeapYear (year) {
    let remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

let languageYear = isLeapYear (1971);
console.log ("This year is a leap year:", languageYear);