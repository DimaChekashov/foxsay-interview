from typing import List


def can_partition_k_subsets(nums: List[int], k: int) -> bool:
    total_sum = sum(nums)

    if total_sum % k != 0:
        return False

    target = total_sum // k
    n = len(nums)

    nums.sort(reverse=True)
    visited = [False] * n

    def backtrack(idx: int, groups_left: int, current_sum: int) -> bool:
        # Все группы собраны
        if groups_left == 0:
            return True

        if current_sum == target:
            return backtrack(0, groups_left - 1, 0)

        for i in range(idx, n):
            if visited[i] or current_sum + nums[i] > target:
                continue

            visited[i] = True
            if backtrack(i + 1, groups_left, current_sum + nums[i]):
                return True
            visited[i] = False

            if current_sum == 0:
                break

        return False

    return backtrack(0, k, 0)