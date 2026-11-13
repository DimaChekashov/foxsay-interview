from typing import List


def pacific_atlantic(heights: List[List[int]]) -> List[List[int]]:
    if not heights or not heights[0]:
        return []

    m, n = len(heights), len(heights[0])
    pacific = [[False] * n for _ in range(m)]
    atlantic = [[False] * n for _ in range(m)]
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    def dfs(r: int, c: int, visited: List[List[bool]], prev_height: int) -> None:
        if (
            r < 0 or c < 0 or r >= m or c >= n
            or visited[r][c]
            or heights[r][c] < prev_height
        ):
            return

        visited[r][c] = True

        for dr, dc in dirs:
            dfs(r + dr, c + dc, visited, heights[r][c])

    for i in range(m):
        dfs(i, 0, pacific, -1)
    for j in range(n):
        dfs(0, j, pacific, -1)

    for i in range(m):
        dfs(i, n - 1, atlantic, -1)
    for j in range(n):
        dfs(m - 1, j, atlantic, -1)

    result = []
    for i in range(m):
        for j in range(n):
            if pacific[i][j] and atlantic[i][j]:
                result.append([i, j])

    return result