class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a,2)+int(b,2))[2:]
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.addBinary("11", "1"))
    print(solution.addBinary("1010", "1011"))