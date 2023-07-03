const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let i = 0; i < s.length; i++) {
        !freq1[s[i]] ? freq1[s[i]] = 1 : freq1[s[i]] += 1;
        !freq2[t[i]] ? freq2[t[i]] = 1 : freq2[t[i]] += 1;
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) return false;
    }

    return true;
};

console.log(`Ouput: ${isAnagram('car', 'rac')}`);
console.log(`Ouput: ${isAnagram('javascript', 'python')}`);
console.log(`Ouput: ${isAnagram('nohtpy','python')}`);
console.log(`Ouput: ${isAnagram('car', 'dfhs')}`);