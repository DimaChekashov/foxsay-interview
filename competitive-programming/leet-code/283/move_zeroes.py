class Solution(object):
    def moveZeroes(self, nums):
        non_zero = 0
    
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i], nums[non_zero] = nums[non_zero], nums[i]
                non_zero += 1

if __name__ == "__main__":
    solution = Solution()
    print(solution.moveZeroes([0,1,0,3,12]))
    print(solution.moveZeroes([0]))