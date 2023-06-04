const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i += 1) {
        let complement = target - nums[i];

        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
};


const nums_one = [1,2,3,4,4,5];
const nums_two = [3,4,5,8,2];
const nums_three = [9,4,5,7,9,4];

console.log(`Output: ${twoSum(nums_one, 7)}`);
console.log(`Output: ${twoSum(nums_two, 34)}`);
console.log(`Output: ${twoSum(nums_three, 13)}`);