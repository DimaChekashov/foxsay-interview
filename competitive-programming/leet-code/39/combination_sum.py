from typing import List

def combination_sum(candidates: List[int], target: int) -> List[List[int]]:
    result = []
    path = []
    candidates.sort()

    def backtrack(start: int, remaining: int) -> None:
        if remaining == 0:
            result.append(path[:])
            return
        if remaining < 0:
            return

        for i in range(start, len(candidates)):
            path.append(candidates[i])
            backtrack(i, remaining - candidates[i])
            path.pop()

    backtrack(0, target)
    return result