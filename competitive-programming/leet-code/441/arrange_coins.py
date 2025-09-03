class Solution:
    def arrangeCoins(self, n: int) -> int:
        if n==1:return n
        for i in range(1,n+1):
            n=n-i
            if n<0: return i-1
            
if __name__ == "__main__":
    solution = Solution()
    print(solution.arrangeCoins(5))
    print(solution.arrangeCoins(8))