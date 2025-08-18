from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            ans[i] = ans[i >> 1] + (i & 1)
        return ans

if __name__ == "__main__":
    solution = Solution()
    print(solution.countBits(2))
    print(solution.countBits(5))