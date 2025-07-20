from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        j = 0
        for i in range(1, len(nums)):
            if nums[j] != nums[i]:
                j += 1
                nums[j] = nums[i]
        
        return j + 1

if __name__ == "__main__":
    solution = Solution()
    print(solution.removeDuplicates([1,1,2]))
    print(solution.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))