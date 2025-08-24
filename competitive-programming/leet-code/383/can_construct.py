from collections import Counter

class Solution:
    def canConstruct(self, ransomNote, magazine):
        st1, st2 = Counter(ransomNote), Counter(magazine)
        if st1 & st2 == st1:
            return True
        return False
        
if __name__ == "__main__":
    solution = Solution()
    print(solution.canConstruct("a", "b"))
    print(solution.canConstruct("aa", "ab"))
    print(solution.canConstruct("aa", "aab"))