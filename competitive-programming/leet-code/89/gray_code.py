from typing import List

class Solution:
    def grayCode(self, n: int) -> List[int]:
        size = 1 << n  # 2^n
        return [i ^ (i >> 1) for i in range(size)]

if __name__ == "__main__":
    solution = Solution()
    print(solution.grayCode(2))
    print(solution.grayCode(1))