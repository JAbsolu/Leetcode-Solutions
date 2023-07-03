def containsDuplicate(nums):
    num_set = {};

    for num in nums:
        if num in num_set:
            return True
        num_set[num] = num

    return False

nums_one = [1,2,3,4,4,5]
nums_two = [3,4,5,8,2]
nums_three = [9,4,5,7,9,4]

# ------TEST CASE -------------

print(containsDuplicate(nums_one))
print(containsDuplicate(nums_two))
print(containsDuplicate(nums_three))