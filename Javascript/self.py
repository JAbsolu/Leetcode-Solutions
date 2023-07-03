def except_self(nums):
    output = [1] * len(nums)
    prefix = 1

    for i in range(len(nums)):
        output[i] = prefix
        prefix *= nums[i]
    
    post = 1

    for i in range(len(nums)-1 , -1, -1):
        output[i] *= post
        post *= nums[i]

    return output

print(except_self([1,2,3,4]))