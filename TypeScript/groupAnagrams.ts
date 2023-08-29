const group_anagrams = (strs: string[]): string[][] => {
    const groups: Record<string, string[]> = {};
    const result: string[][] = [];

    for (let str of strs) {
        const charCount: number[] = Array(26).fill(0);

        for (let char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        const key = charCount.join(',');
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str)
    }

    for (let key in groups) {
        result.push(groups[key])
    }

    return result;
}

console.log('Output:', group_anagrams(["eat","tea","tan","ate","nat","bat"]));
console.log('Output:', group_anagrams([""]));
console.log('Output:', group_anagrams(["a"]));
