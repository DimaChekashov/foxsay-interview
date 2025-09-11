class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        maxi = result = 0
        
        for num in nums:
            if num == 1:
                result += 1
                maxi = max(maxi, result)
            else:
                result = 0
        return maxi
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.findMaxConsecutiveOnes([1,1,0,1,1,1]))
    print(solution.findMaxConsecutiveOnes([1,0,1,1,0,1]))