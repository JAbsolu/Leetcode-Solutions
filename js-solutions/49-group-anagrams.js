const group_anagrams = (strs) => {
    const groups = {};
    const result = [];

    for (let str of strs) {
        const charCount = Array(26).fill(0);

        for (let char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        if (!groups[charCount]) {
            groups[charCount] = [];
        }
        groups[charCount].push(str)
    }

    for (let key in groups) {
        result.push(groups[key])
    }

    return result;
}


console.log('Output: ' + group_anagrams(["eat","tea","tan","ate","nat","bat"]));
console.log('Output: ' + group_anagrams([""]));
console.log('Output: ' + group_anagrams(["a"]));