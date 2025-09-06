class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)
        for i in range(1, n//2 + 1):
            if n % i == 0:
                substring = s[:i]
                if substring * (n // i) == s:
                    return True
        return False
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.repeatedSubstringPattern("abab"))
    print(solution.repeatedSubstringPattern("aba"))
    print(solution.repeatedSubstringPattern("abcabcabcabc"))