from typing import List

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        if len(set(nums)) >= 3:
            return sorted(set(nums))[-3]
        else:
            return sorted(set(nums))[-1]

if __name__ == "__main__":
    solution = Solution()
    print(solution.thirdMax([3,2,1]))
    print(solution.thirdMax([1,2]))
    print(solution.thirdMax([2,2,3,1]))