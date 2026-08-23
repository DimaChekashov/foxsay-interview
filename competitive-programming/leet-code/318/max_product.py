from typing import List

def max_product(words: List[str]) -> int:
    n = len(words)
    bitmasks = [0] * n

    for i in range(n):
        for char in words[i]:
            bitmasks[i] |= 1 << (ord(char) - ord('a'))

    max_prod = 0

    for i in range(n):
        for j in range(i + 1, n):
            if (bitmasks[i] & bitmasks[j]) == 0:
                max_prod = max(max_prod, len(words[i]) * len(words[j]))

    return max_prod