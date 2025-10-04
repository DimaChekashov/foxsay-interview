from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        sum_ = 0
        for i in range(0,len(nums),2):
            sum_ += nums[i]
        return sum_

if __name__ == "__main__":
    solution = Solution()
    print(solution.arrayPairSum([1,4,3,2]))
    print(solution.arrayPairSum([6,2,6,5,1,2]))