def combination_sum3(k: int, n: int) -> list[list[int]]:
    res = []

    def backtrack(start: int, path: list[int], target: int, k: int) -> None:
        if target == 0 and k == 0:
            res.append(path[:])
            return

        for i in range(start, 10):
            if i > target or k <= 0:
                break
            path.append(i)
            backtrack(i + 1, path, target - i, k - 1)
            path.pop()

    backtrack(1, [], n, k)
    return res