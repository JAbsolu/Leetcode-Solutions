/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

function strStr(haystack: string, needle: string): number {
    let i: number = 0;
    let j: number = 0;

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            if (j === needle.length - 1) return i - j
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};