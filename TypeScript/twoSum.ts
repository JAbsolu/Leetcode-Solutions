const twoSum = (nums: number[], target: number ): number[] => {
    const map: Record<number, number> = {};

    for (let i: number = 0; i < nums.length; i += 1) {
        let complement: number = target - nums[i];

        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
};


const testOne: number[] = [1,2,3,4,4,5];
const testTwo: number[] = [3,4,5,8,2];
const testThree: number[] = [9,4,5,7,9,4];

console.log(`Output: ${twoSum(testOne, 7)}`);
console.log(`Output: ${twoSum(testTwo, 34)}`);
console.log(`Output: ${twoSum(testThree, 13)}`);