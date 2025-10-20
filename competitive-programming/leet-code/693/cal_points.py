class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        bits = bin(n)
        return "00" not in bits and "11" not in bits
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.hasAlternatingBits(5))
    print(solution.hasAlternatingBits(7))
    print(solution.hasAlternatingBits(11))