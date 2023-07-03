

const containsDuplicate = nums => {
    const set = {};

    for (let num of nums) {
        if (num in set) return true;
        set[num] = num;
    }
    return false;
};

// TEST CASES
const nums_one = [1,2,3,4,4,5];
const nums_two = [3,4,5,8,2];
const nums_three = [9,4,5,7,9,4];

console.log(`Output: ${containsDuplicate(nums_one)}`);
console.log(`Output: ${containsDuplicate(nums_two)}`);
console.log(`Output: ${containsDuplicate(nums_three)}`);

