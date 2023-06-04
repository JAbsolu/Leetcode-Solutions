const groupAnagrams = (strs) => {    
    const groupsMap = {};
    const result = [];

    for (let str of strs) {
        let reversed_str = str.split('').sort().join('');

        !groupsMap[reversed_str] ? groupsMap[reversed_str] = [] : null;
        groupsMap[reversed_str].push(str)
    }

    for (let key in groupsMap) {
        result.push(groupsMap[key]);
    }

    return result;
};

console.log('Output: ' + groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log('Output: ' + groupAnagrams([""]));
console.log('Output: ' + groupAnagrams(["a"]));