from typing import List


def search_matrix(matrix: List[List[int]], target: int) -> bool:
    if not matrix or not matrix[0]:
        return False

    r = 0
    c = len(matrix[0]) - 1

    while r < len(matrix) and c >= 0:
        if matrix[r][c] == target:
            return True
        elif matrix[r][c] > target:
            c -= 1
        else:
            r += 1

    return False