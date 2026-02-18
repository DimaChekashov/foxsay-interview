var solveSudoku = function (board) {
  const m = board.length
  const n = board[0].length

  const backtraking = (i, j) => {
    if (i === m && j === 0) return true

    let x = i
    let y = j + 1
    if (y >= n) {
      x = i + 1
      y = 0
    }

    if (board[i][j] !== '.') {
      return backtraking(x, y)
    } else {
      for (let num = 1; num <= 9; num++) {
        let candidate = String(num)
        if (isGood(board, i, j, candidate)) {
          board[i][j] = candidate
          if (backtraking(x, y)) return true
          board[i][j] = '.'
        }
      }

    }

    return false
  }

  backtraking(0, 0)
};

function isGood(board, x, y, candidate) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][y] === candidate || board[x][i] === candidate) {
      return false
    }
  }

  let startX = Math.floor(x / 3) * 3
  let startY = Math.floor(y / 3) * 3
  for (let i = startX; i < startX + 3; i++) {
    for (let j = startY; j < startY + 3; j++) {
      if (board[i][j] === candidate) {
        return false
      }
    }
  }


  return true
}