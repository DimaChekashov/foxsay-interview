class Solution:
    def firstUniqChar(self, s: str) -> int:
        mp = {}
        for a in s:
            mp[a] = mp.get(a, 0) + 1
        for i in range(len(s)):
            if mp[s[i]] == 1:
                return i
        return -1

if __name__ == "__main__":
    solution = Solution()
    print(solution.firstUniqChar("leetcode"))
    print(solution.firstUniqChar("loveleetcode"))
    print(solution.firstUniqChar("aabb"))