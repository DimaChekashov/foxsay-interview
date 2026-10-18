from typing import List


def can_partition(nums: List[int]) -> bool:
    total = sum(nums)

    if total % 2 != 0:
        return False

    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True

    for num in nums:
        for i in range(target, num - 1, -1):
            if dp[i]:
                continue
            if dp[i - num]:
                dp[i] = True
            if dp[target]:
                return True

    return False