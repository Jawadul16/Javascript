const year = 3588;
let remainder = year % 4;
console.log(remainder == 0);
if (remainder == 0) {
    console.log('Your year is a leap year');
}
else {
    console.log('Your year is not a leap year');
}


function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0){
        return true;
    } else {
        return false;
    }
}
const check = isLeapYear(2000);
console.log(check);