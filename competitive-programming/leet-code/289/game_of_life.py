def game_of_life(board):
    m = len(board)
    n = len(board[0])
    
    def count_live(r, c):
        count = 0
        for dr in range(-1, 2):
            for dc in range(-1, 2):
                if dr == 0 and dc == 0:
                    continue
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and abs(board[nr][nc]) == 1:
                    count += 1
        return count
    
    for r in range(m):
        for c in range(n):
            live = count_live(r, c)
            if board[r][c] == 1 and (live < 2 or live > 3):
                board[r][c] = -1
            if board[r][c] == 0 and live == 3:
                board[r][c] = 2
    
    for r in range(m):
        for c in range(n):
            board[r][c] = 1 if board[r][c] > 0 else 0