class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(map(lambda word: word[::-1], s.split()))

if __name__ == "__main__":
    solution = Solution()
    print(solution.reverseWords("Let's take LeetCode contest"))
    print(solution.reverseWords("Mr Ding"))