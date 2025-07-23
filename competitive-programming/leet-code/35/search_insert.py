from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low, high = 0, len(nums)
        while low < high:
            mid = (low + high) // 2
            if target > nums[mid]:
                low = mid + 1
            else:
                high = mid
        return low
    
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.searchInsert([1,3,5,6], 5))
    print(solution.searchInsert([1,3,5,6], 2))