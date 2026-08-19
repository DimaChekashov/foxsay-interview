from typing import List

def wiggle_sort(nums: List[int]) -> None:
    v = nums.copy()
    v.sort()

    n = len(nums)
    mid = (n + 1) // 2

    left = mid - 1
    right = n - 1

    for i in range(n):
        if i % 2 == 0:
            nums[i] = v[left]
            left -= 1
        else:
            nums[i] = v[right]
            right -= 1
