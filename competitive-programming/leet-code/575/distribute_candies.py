from typing import List

class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        candy_len = int(len(candyType)/2)
        unique_candy_len = len(set(candyType))
        return min(candy_len,unique_candy_len)

if __name__ == "__main__":
    solution = Solution()
    print(solution.distributeCandies([1,1,2,2,3,3]))
    print(solution.distributeCandies([1,1,2,3]))
    print(solution.distributeCandies([6,6,6,6]))