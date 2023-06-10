def twoSum(nums, target):
    numMap = {}
    i = 0;

    while i < len(nums):
        complement = target - nums[i]
        if complement in numMap:
            return [i,numMap[complement]]
        numMap[nums[i]] = i
        i += 1
    return []


# TEST CASES
nums_one = [1,2,3,4,4,5];
nums_two = [3,4,5,8,2];
nums_three = [9,4,5,7,9,4];
print(twoSum(nums_one, 7))
print(twoSum(nums_two, 11))
print(twoSum(nums_three, 23))