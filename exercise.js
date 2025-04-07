// function formatDate(date = new Date()) {
//     const days = date.getDate();
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();

//     return `${days}/${months}/${years}`
// }


// console.log(formatDate());

// function NewString(str) {
//     return str.indexOf('New') === 0 ? str : `New ${str}`;
// }

// console.log(NewString('New Year!'))

//Exercise
// function newString(str) {
//     return (str.length < 3) ? str : (str.slice(0, 3) + str.slice(-3));
// }

// console.log(newString('abcabd123'))



//Exercise
// function firstHalf(str) {
//     return str.slice(0, str.length / 2);
// }

// console.log(firstHalf('Happy Birthday to you!'));



//Exercise
// function addString(str1, str2) {
//     str1.slice(1) + str2.slice(1);
// }


//Exercise
// function nearestToHundred(num1, num2) {
//     let diff1 = (100 - num1)
//     diff1 = diff1 < 0 ? -diff1 : diff1;

//     let diff2 = (100 - num2)
//     diff2 = diff2 < 0 ? -diff2 : diff2;
    
//     if (diff1 < diff2) {
//         return num1;
//     }
//         return num2;
// }

// console.log(nearestToHundred(800,900))