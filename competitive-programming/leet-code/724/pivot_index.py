from typing import List

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        s,count=sum(nums),0
        for ind in range(len(nums)):
            count+=nums[ind]
            if count==s:
                return ind
            s-=nums[ind]
        return -1
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.pivotIndex([1,7,3,6,5,6]))
    print(solution.pivotIndex([1,2,3]))
    print(solution.pivotIndex([2,1,-1]))