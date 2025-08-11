class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(zip(s,t))) == len(set(s)) == len(set(t))

if __name__ == "__main__":
    solution = Solution()
    print(solution.isIsomorphic("egg", "add"))
    print(solution.isIsomorphic("foo", "bar"))
    print(solution.isIsomorphic("paper", "title"))