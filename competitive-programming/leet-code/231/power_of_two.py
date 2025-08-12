class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        for i in range(31):
            ans = 2 ** i
            if ans == n:
                return True
        return False
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.isPowerOfTwo(1))
    print(solution.isPowerOfTwo(16))
    print(solution.isPowerOfTwo(3))