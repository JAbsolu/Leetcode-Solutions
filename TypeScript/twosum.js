var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i += 1) {
        var complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
var testOne = [1, 2, 3, 4, 4, 5];
var testTwo = [3, 4, 5, 8, 2];
var testThree = [9, 4, 5, 7, 9, 4];
console.log("Output: ".concat(twoSum(testOne, 7)));
console.log("Output: ".concat(twoSum(testTwo, 34)));
console.log("Output: ".concat(twoSum(testThree, 13)));
