from typing import List


def wiggle_max_length(nums: List[int]) -> int:
    n = len(nums)
    if n < 2:
        return n

    i = 1
    while i < n and nums[i] == nums[i - 1]:
        i += 1

    if i == n:
        return 1

    up = nums[i - 1] > nums[i]
    ans = 1

    for j in range(i, n):
        if (up and nums[j] < nums[j - 1]) or (not up and nums[j] > nums[j - 1]):
            up = not up
            ans += 1

    return ans