from typing import List

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cur = 0 
        dp0 = cost[0]
        if len(cost) >= 2:
            dp1 = cost[1]

        for i in range(2, len(cost)):
            cur = cost[i] + min(dp0, dp1)
            dp0 = dp1
            dp1 = cur

        return min(dp0, dp1)
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.minCostClimbingStairs([10,15,20]))
    print(solution.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))