from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        valuesMap = {}

        for i in range(len(nums)):
            pair_key = target - nums[i]
            if pair_key in valuesMap and valuesMap[pair_key] != i:
                return [i, valuesMap[pair_key]]
            else:
                valuesMap[nums[i]] = i

        return []

if __name__ == "__main__":
    solution = Solution()
    print(solution.twoSum([2, 7, 11, 15], 9))
    print(solution.twoSum([3, 2, 4], 6))
    print(solution.twoSum([3, 3], 6))