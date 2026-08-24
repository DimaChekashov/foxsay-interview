from typing import List

def palindrome_pairs(words: List[str]) -> List[List[int]]:
    def is_pal(word: str, left: int = 0, right: int = None) -> bool:
        if right is None:
            right = len(word) - 1
        while left < right:
            if word[left] != word[right]:
                return False
            left += 1
            right -= 1
        return True

    word_map = {word: i for i, word in enumerate(words)}
    ans = []

    for i, word in enumerate(words):
        if word == "":
            for j, other in enumerate(words):
                if i != j and is_pal(other):
                    ans.append([i, j])
                    ans.append([j, i])
            continue

        reversed_word = word[::-1]
        if reversed_word in word_map:
            j = word_map[reversed_word]
            if i != j:
                ans.append([i, j])

        for j in range(1, len(reversed_word)):
            if is_pal(reversed_word, 0, j - 1):
                suffix = reversed_word[j:]
                if suffix in word_map:
                    ans.append([i, word_map[suffix]])

            if is_pal(reversed_word, j):
                prefix = reversed_word[:j]
                if prefix in word_map:
                    ans.append([word_map[prefix], i])

    return ans