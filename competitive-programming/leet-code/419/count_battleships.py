def count_battleships(board: list[list[str]]) -> int:
    count = 0
    if not board:
        return 0

    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 'X' and \
               (j == 0 or board[i][j - 1] != 'X') and \
               (i == 0 or board[i - 1][j] != 'X'):
                count += 1
    return count