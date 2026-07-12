from typing import List
import math

def contains_nearby_almost_duplicate(nums: List[int], index_diff: int, value_diff: int) -> bool:
    if index_diff <= 0 or value_diff < 0:
        return False

    width = value_diff + 1
    buckets = {}

    def bucket_id(x: int) -> int:
        return math.floor(x / width)

    for i, x in enumerate(nums):
        bucket = bucket_id(x)

        if bucket in buckets:
            return True

        if (bucket - 1) in buckets and abs(x - buckets[bucket - 1]) <= value_diff:
            return True
        if (bucket + 1) in buckets and abs(x - buckets[bucket + 1]) <= value_diff:
            return True

        buckets[bucket] = x

        if i >= index_diff:
            old = nums[i - index_diff]
            del buckets[bucket_id(old)]

    return False
