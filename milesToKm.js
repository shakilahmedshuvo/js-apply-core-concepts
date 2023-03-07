// miles to kilometer funcation......
function milesToKm(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const myHomeKilometer = 2;
const myOfficeMiles = milesToKm(myHomeKilometer);
console.log(myOfficeMiles);
