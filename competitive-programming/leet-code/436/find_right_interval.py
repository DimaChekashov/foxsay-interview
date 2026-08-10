from typing import List

def find_right_interval(intervals: List[List[int]]) -> List[int]:
    n = len(intervals)
    
    indexed_intervals = [[interval[0], interval[1], i] for i, interval in enumerate(intervals)]
    indexed_intervals.sort(key=lambda x: x[0])
    
    results = [-1] * n
    
    for i in range(n):
        target_end = indexed_intervals[i][1]
        original_idx = indexed_intervals[i][2]
        
        left = 0
        right = n - 1
        
        while left <= right:
            mid = (left + right) // 2
            if indexed_intervals[mid][0] >= target_end:
                results[original_idx] = indexed_intervals[mid][2]
                right = mid - 1
            else:
                left = mid + 1
    
    return results