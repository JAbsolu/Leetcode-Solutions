var group_anagrams = function (strs) {
    var groups = {};
    var result = [];
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        var charCount = Array(26).fill(0);
        for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
            var char = str_1[_a];
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        var key = charCount.join(',');
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    }
    for (var key in groups) {
        result.push(groups[key]);
    }
    return result;
};
console.log('Output:', group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log('Output:', group_anagrams([""]));
console.log('Output:', group_anagrams(["a"]));
