def knight_probability(n: int, k: int, row: int, column: int) -> float:
    dirs = [
        (-2, -1), (-1, -2), (1, -2), (2, -1),
        (2, 1), (1, 2), (-1, 2), (-2, 1),
    ]

    dp = [[0.0] * n for _ in range(n)]
    dp[row][column] = 1.0

    for _ in range(k):
        next_dp = [[0.0] * n for _ in range(n)]

        for i in range(n):
            for j in range(n):
                if dp[i][j] == 0:
                    continue

                for dx, dy in dirs:
                    x, y = i + dx, j + dy
                    if 0 <= x < n and 0 <= y < n:
                        next_dp[x][y] += dp[i][j] / 8

        dp = next_dp

    return sum(sum(row) for row in dp)