/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

function addBinary(a: string, b: string): string {
    let i: number = a.length - 1;
    let j: number = b.length - 1;
    let result: string = '';
    let carry: number = 0;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const aBit: number = parseInt(a[i]) >= 0 ? parseInt(a[i]) : 0
        const bBit: number = parseInt(b[j]) >= 0 ? parseInt(b[j]) : 0
        
        const sum: number = aBit + bBit + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }
    return result;
};