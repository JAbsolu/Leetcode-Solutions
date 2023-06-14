
/* 
---------------------------------
--------------Rookie-------------
---------------------------------
*/

// const hasMoney = (balance) => {
//     let hasMoney = balance > 0;

//     if (hasMoney > 0) {
//         let message = `User has $${balance} available for spending.`;
//         return message;
//     } else {
//         message = `User has no money, he/she is broke!`;
//         return message;
//     }
// }

// console.log(hasMoney(50.00));
// console.log(hasMoney(1000));





/* 
---------------------------------
--------Intermediate-------------
---------------------------------
*/

// const hasMoney = (balance) => {
//     let hasMoney = balance > 0;

//     if (hasMoney) return `User has $${balance} available.` 
//     else return `User is broke! balance: $${balance}`;
// }

// console.log(hasMoney(500.00));
// console.log(hasMoney(1000.00));





/* 
-------------------------------------
--------PROFESSIONAL-----------------
-------------------------------------
*/

const hasMoney = (balance) => {
    // let hasMoney = balance > 0;
    return balance > 0 ? `The user has money balance is: $${balance}.` 
    : `User is broke! balance: $${balance}`
}

console.log(hasMoney(30.00));
// console.log(hasMoney(50.00));
