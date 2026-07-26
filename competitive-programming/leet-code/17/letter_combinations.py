from typing import List

def letter_combinations(digits: str) -> List[str]:
    if not digits:
        return []

    phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    output = []

    def backtrack(combination: str, next_digits: str) -> None:
        if not next_digits:
            output.append(combination)
            return

        letters = phone_map[int(next_digits[0]) - 2]
        for letter in letters:
            backtrack(combination + letter, next_digits[1:])

    backtrack("", digits)
    return output