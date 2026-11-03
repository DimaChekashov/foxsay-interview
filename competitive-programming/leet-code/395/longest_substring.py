def longest_substring(s: str, k: int) -> int:
    def helper(sub: str) -> int:
        if not sub:
            return 0

        freq = {}
        for ch in sub:
            freq[ch] = freq.get(ch, 0) + 1

        for i, ch in enumerate(sub):
            if freq[ch] < k:
                left = helper(sub[:i])
                right = helper(sub[i + 1:])
                return max(left, right)

        return len(sub)

    return helper(s)