class Solution:
    def isPowerOfFour(self, n):
        for i in range(16):
            power_of_four = 4 ** i
            if power_of_four == n:
                return True
            if power_of_four > n:
                return False
        return False

if __name__ == "__main__":
    solution = Solution()
    print(solution.isPowerOfFour(16))
    print(solution.isPowerOfFour(5))
    print(solution.isPowerOfFour(1))