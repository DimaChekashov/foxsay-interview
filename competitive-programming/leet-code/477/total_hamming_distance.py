from typing import List


def total_hamming_distance(nums: List[int]) -> int:
    total = 0
    n = len(nums)

    for i in range(32):
        bit_count = 0
        for num in nums:
            bit_count += (num >> i) & 1

        total += bit_count * (n - bit_count)

    return total