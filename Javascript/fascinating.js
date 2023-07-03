/*

2729. Check if The Number is Fascinating

You are given an integer n that consists of exactly 3 digits.

We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

Concatenate n with the numbers 2 * n and 3 * n.
Return true if n is fascinating, or false otherwise.

Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

*/


/**
 * @param {number} n
 * @return {boolean}
 */
// var isFascinating = function(n) {

var isFascinating = function(n) {
    const set = {};

    let concatNum = n + '' + n * 2 + '' + n * 3;

    for (let i = 0; i < concatNum.length; i+=1) {
        if (concatNum[i] < 1) return false;

        if (set[concatNum[i]]) {
            return false;
        }
        set[concatNum[i]] = concatNum[i];
    }

    return true;

};


console.log(isFascinating("192"));
console.log(isFascinating("100"));
console.log(isFascinating("123"));
console.log(isFascinating("172"));
