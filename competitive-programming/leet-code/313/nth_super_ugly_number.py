from typing import List

def nth_super_ugly_number(n: int, primes: List[int]) -> int:
    ugly = [1] * n
    idx = [0] * len(primes)
    val = primes.copy()

    for i in range(1, n):
        min_val = min(val)
        ugly[i] = min_val

        for j in range(len(primes)):
            if val[j] == min_val:
                idx[j] += 1
                val[j] = ugly[idx[j]] * primes[j]

    return ugly[n - 1]
