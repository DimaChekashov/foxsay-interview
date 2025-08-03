from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        maximumProfit, minStockVal = 0, float('inf')
        i = 0
        while i < n:
            minStockVal = min(minStockVal, prices[i])
            if prices[i] >= minStockVal:
                maximumProfit = max(maximumProfit, prices[i] - minStockVal)
            i += 1
        return maximumProfit
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.maxProfit([7,1,5,3,6,4]))
    print(solution.maxProfit([7,6,4,3,1]))