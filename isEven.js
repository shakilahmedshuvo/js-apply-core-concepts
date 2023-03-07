// console.log(4 % 2);
// console.log(98 % 2);
// console.log(114 % 2);
// console.log(1286 % 2);
// 
// console.log(41 % 2);
// console.log(989 % 2);
// console.log(1145 % 2);
// console.log(1283 % 2);

// is the number is odd orf even check function..........
function isEven(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

// call the funcation....
const myNumber = isEven(505);
console.log(myNumber);

const myNumber2 = isEven(502);
console.log(myNumber2);