const containsDuplicate = (nums: number[]): boolean => {
    const set: Record<number, number> = {};

    for (let num of nums) {
        if (num in set) return true;
        set[num] = num;
    }
    return false;
};

// TEST CASES
const test_one = [1,2,3,4,4,5];
const test_two = [3,4,5,8,2];
const test_three = [9,4,5,7,9,4];

console.log(`Output: ${containsDuplicate(test_one)}`);
console.log(`Output: ${containsDuplicate(test_two)}`);
console.log(`Output: ${containsDuplicate(test_three)}`);

