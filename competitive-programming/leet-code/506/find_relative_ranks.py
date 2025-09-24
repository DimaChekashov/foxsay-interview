from typing import List

class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sorted_score = sorted(score, reverse=True)
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
        rank_mapping = {score: medals[i] if i < 3 else str(i + 1) for i, score in enumerate(sorted_score)}
        return [rank_mapping[score] for score in score]

if __name__ == "__main__":
    solution = Solution()
    print(solution.findRelativeRanks([5,4,3,2,1]))
    print(solution.findRelativeRanks([10,3,8,9,4]))