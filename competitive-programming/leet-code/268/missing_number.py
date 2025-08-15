from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        v = [-1] * (n + 1)
        for num in nums:
            v[num] = num
        for i in range(len(v)):
            if v[i] == -1:
                return i
        return 0

if __name__ == "__main__":
    solution = Solution()
    print(solution.missingNumber([3,0,1]))
    print(solution.missingNumber([0,1]))
    print(solution.missingNumber([9,6,4,2,3,5,7,0,1]))