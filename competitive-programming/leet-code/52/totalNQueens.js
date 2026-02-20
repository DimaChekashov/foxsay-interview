var totalNQueens = function (n) {
  const board = Array.from({ length: n }, () => Array(n).fill(false));
  return solve(board, 0);
};

function solve(board, row) {
  if (row === board.length) return 1;

  let count = 0;
  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      count += solve(board, row + 1);
      board[row][col] = false;
    }
  }
  return count;
}

function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  for (let i = 1; i <= Math.min(row, col); i++) {
    if (board[row - i][col - i]) return false;
  }

  for (let i = 1; i <= Math.min(row, board.length - 1 - col); i++) {
    if (board[row - i][col + i]) return false;
  }

  return true;
}