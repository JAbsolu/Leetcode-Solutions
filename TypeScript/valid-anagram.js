var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    var freq1 = {};
    var freq2 = {};
    for (var i = 0; i < s.length; i++) {
        !freq1[s[i]] ? freq1[s[i]] = 1 : freq1[s[i]] += 1;
        !freq2[t[i]] ? freq2[t[i]] = 1 : freq2[t[i]] += 1;
    }
    for (var key in freq1) {
        if (freq1[key] !== freq2[key])
            return false;
    }
    return true;
};
console.log("Ouput: ".concat(isAnagram('car', 'rac')));
console.log("Ouput: ".concat(isAnagram('javascript', 'python')));
console.log("Ouput: ".concat(isAnagram('nohtpy', 'python')));
console.log("Ouput: ".concat(isAnagram('car', 'dfhs')));
