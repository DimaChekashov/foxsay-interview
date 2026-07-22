from typing import List

def find_longest_word(s: str, dictionary: List[str]) -> str:
    def is_subsequence(word: str) -> bool:
        i = 0
        for c in s:
            if c == word[i]:
                i += 1
            if i == len(word):
                return True
        return False

    dictionary.sort(key=lambda x: (-len(x), x))

    for word in dictionary:
        if is_subsequence(word):
            return word

    return ""