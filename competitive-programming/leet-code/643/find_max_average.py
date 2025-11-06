from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:        
        currSum = maxSum = sum(nums[:k])

        for i in range(k, len(nums)):
            currSum += nums[i] - nums[i - k]
            maxSum = max(maxSum, currSum)
        return maxSum / k

if __name__ == "__main__":
    solution = Solution()
    print(solution.findMaxAverage([1,12,-5,-6,50,3], 4))
    print(solution.findMaxAverage([5], 1))