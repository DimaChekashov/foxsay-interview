from typing import List

class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        first_max = second_max = -1
        max_ind = 0

        for i, num in enumerate(nums):
            if num >= first_max:
                first_max, second_max = num, first_max
                max_ind = i
            elif num > second_max:
                second_max = num

        if first_max < 2*second_max:
            max_ind = -1

        return max_ind

if __name__ == "__main__":
    solution = Solution()
    print(solution.dominantIndex([3,6,1,0]))
    print(solution.dominantIndex([1,2,3,4]))