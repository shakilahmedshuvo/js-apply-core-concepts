// ........................................................
// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// // dada say more inches
// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada ar feet', dadaFeet);

// // dedi say less more inches
// const dadaiInches = 60;
// const dadiFeet = dadaiInches / 12;
// console.log("dadi say less more inches", dadiFeet);


// ..........................................................
// funcation
function inchesToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

// call the inches to feet the function....
const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);

// nana inches.....
const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log(nanaFeet);