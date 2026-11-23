from collections import Counter
from typing import List


def top_k_frequent(words: List[str], k: int) -> List[str]:
    freq = Counter(words)

    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))

    return [word for word, _ in sorted_words[:k]]