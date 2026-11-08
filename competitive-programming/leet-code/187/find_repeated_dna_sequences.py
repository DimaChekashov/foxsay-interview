from typing import List


def find_repeated_dna_sequences(s: str) -> List[str]:
    if len(s) < 10:
        return []

    curr = s[:10]
    seen = {curr}
    res = set()

    for i in range(10, len(s)):
        curr = curr[1:] + s[i]
        if curr in seen:
            res.add(curr)
        seen.add(curr)

    return list(res)