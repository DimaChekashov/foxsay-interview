from typing import List

def rob(nums: List[int]) -> int:
    def get_max(arr: List[int]) -> int:
        prev_rob = 0
        max_rob = 0

        for cur_val in arr:
            temp = max(max_rob, prev_rob + cur_val)
            prev_rob = max_rob
            max_rob = temp

        return max_rob

    if len(nums) == 1:
        return nums[0]

    return max(get_max(nums[:-1]), get_max(nums[1:]), nums[0])