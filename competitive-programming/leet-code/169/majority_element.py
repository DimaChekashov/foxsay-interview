from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        return nums[n//2]

if __name__ == "__main__":
    solution = Solution()
    print(solution.majorityElement([3,2,3]))
    print(solution.majorityElement([2,2,1,1,1,2,2]))