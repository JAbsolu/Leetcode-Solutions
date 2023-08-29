var containsDuplicate = function (nums) {
    var set = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num in set)
            return true;
        set[num] = num;
    }
    return false;
};
// TEST CASES
var test_one = [1, 2, 3, 4, 4, 5];
var test_two = [3, 4, 5, 8, 2];
var test_three = [9, 4, 5, 7, 9, 4];
console.log("Output: ".concat(containsDuplicate(test_one)));
console.log("Output: ".concat(containsDuplicate(test_two)));
console.log("Output: ".concat(containsDuplicate(test_three)));
