function multiplicationOfNumbers(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

// call the function.....
const result = multiplicationOfNumbers(14);
console.log(result);