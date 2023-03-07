// is the year is leap year.......
function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        // console.log('Your year is leap year:', year);
        return true;
    }

    return false;


    // else writen is not mandatory......
    // else {
    //     // console.log('Your year is not a leap year', year);
    //     return false;
    // }
}

// call the funcation......
// 1.
const isMyYearIsLeapYear = isLeapYear(1933);
console.log("my year:", isMyYearIsLeapYear);

// 2.
const isHerYearIsLeapYear = isLeapYear(1960);
console.log("her year:", isHerYearIsLeapYear);