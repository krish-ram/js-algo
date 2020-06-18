/**

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:
X X X X
X O O X
X X O X
X O X X

After running your function, the board should be:
X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
Two cells are connected if they are adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length) return;

  for (let i = 0; i < board.length; i++) {
    dfs(board, i, 0);
    dfs(board, i, board[0].length - 1);
  }
  for (let j = 1; j < board[0].length - 1; j++) {
    dfs(board, 0, j);
    dfs(board, board.length - 1, j);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") board[i][j] = "X";
      else if (board[i][j] == ".") board[i][j] = "O";
    }
  }
};
let dfs = (board, i, j) => {
  if (
    i >= 0 &&
    j >= 0 &&
    i < board.length &&
    j < board[0].length &&
    board[i][j] == "O"
  ) {
    board[i][j] = ".";
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
  }
  return;
};
