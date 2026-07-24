from typing import List

def number_of_arithmetic_slices(nums: List[int]) -> int:
    if len(nums) < 3:
        return 0

    diffs = []
    for i in range(len(nums) - 1):
        diffs.append(nums[i + 1] - nums[i])

    count = 0
    start = 0

    while start < len(diffs):
        end = start
        while end + 1 < len(diffs) and diffs[end + 1] == diffs[start]:
            end += 1

        length = end - start + 1

        if length >= 2:
            count += (length * (length - 1)) // 2

        start = end + 1

    return count