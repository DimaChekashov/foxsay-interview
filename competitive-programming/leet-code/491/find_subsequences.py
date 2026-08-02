from typing import List

def find_subsequences(nums: List[int]) -> List[List[int]]:
    res = set()

    def backtrack(index: int, path: List[int]) -> None:
        if len(path) >= 2:
            res.add(tuple(path))

        for i in range(index, len(nums)):
            if not path or nums[i] >= path[-1]:
                backtrack(i + 1, path + [nums[i]])

    backtrack(0, [])
    return [list(seq) for seq in res]