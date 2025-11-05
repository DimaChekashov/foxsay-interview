class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0:
            return False
        while n % 3 == 0:
            n //= 3
        return n == 1

if __name__ == "__main__":
    solution = Solution()
    print(solution.isPowerOfThree(27))
    print(solution.isPowerOfThree(0))
    print(solution.isPowerOfThree(-1))