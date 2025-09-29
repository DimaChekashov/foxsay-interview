class Solution:
    def findLUSlength(self, a: str, b: str) -> int:
        if a == b:
            return -1
        else:
            return max(len(a), len(b))

if __name__ == "__main__":
    solution = Solution()
    print(solution.findLUSlength("aba", "cdc"))
    print(solution.findLUSlength("aaa", "bbb"))
    print(solution.findLUSlength("aaa", "aaa"))