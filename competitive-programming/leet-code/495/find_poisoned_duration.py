from typing import List

class Solution:
  def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
    if not timeSeries:
        return 0
    n = len(timeSeries)
    poisoned_time = 0
    
    for i in range(n-1):
        duration_of_effect = min(duration, timeSeries[i+1]-timeSeries[i])
        poisoned_time += duration_of_effect
        
    poisoned_time += duration
    
    return poisoned_time

if __name__ == "__main__":
    solution = Solution()
    print(solution.findPoisonedDuration([1, 4], 2))
    print(solution.findPoisonedDuration([1, 2], 2))