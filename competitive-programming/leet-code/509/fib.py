class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        a, b = 0, 1

        for _ in range(2, n + 1):
            a, b = b, a + b
            
        return b
        

if __name__ == "__main__":
    solution = Solution()
    print(solution.fib(2))
    print(solution.fib(3))
    print(solution.fib(4))