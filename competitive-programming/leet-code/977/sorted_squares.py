def sortedSquares(nums):
    sorted_arr = [0] * len(nums)
    left, right = 0, len(nums) - 1
    i = len(nums) - 1

    while i >= 0:
        left_square = nums[left] ** 2
        right_square = nums[right] ** 2

        if left_square > right_square:
            sorted_arr[i] = left_square
            left += 1
        else:
            sorted_arr[i] = right_square
            right -= 1

        i -= 1
    
    return sorted_arr

print(sortedSquares([-4,-1,0,3,10]))