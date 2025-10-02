class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        if len(s)<(k):return s[::-1]
        if len(s)<(2*k):return (s[:k][::-1]+s[k:])
        return s[:k][::-1]+s[k:2*k]+self.reverseStr(s[2*k:],k)

if __name__ == "__main__":
    solution = Solution()
    print(solution.reverseStr("abcdefg", 2))
    print(solution.reverseStr("abcd", 2))