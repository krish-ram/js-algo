/**
 *  Given a 2D board and a word, find if the word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cell, 
    where "adjacent" cells are those horizontally or vertically neighboring. 
    The same letter cell may not be used more than once.

    Example:
    board =[  ['A','B','C','E'],  ['S','F','C','S'],  ['A','D','E','E']]
    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
    
    Constraints:
    board and word consists only of lowercase and uppercase English letters.
    1 <= board.length <= 200
    1 <= board[i].length <= 200
    1 <= word.length <= 10^3
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length,
    columns = board[0].length;
  let visited = new Array(rows);
  for (let i = 0; i < rows; i++) visited[i] = new Array(columns).fill(false);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (
        word.charAt(0) == board[i][j] &&
        searchWord(i, j, 0, word, board, visited)
      ) {
        return true;
      }
    }
  }
  return false;
};

var searchWord = function (i, j, index, word, board, visited) {
  if (index == word.length) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    word.charAt(index) !== board[i][j] ||
    visited[i][j]
  )
    return false;
  visited[i][j] = true;

  if (
    searchWord(i + 1, j, index + 1, word, board, visited) ||
    searchWord(i - 1, j, index + 1, word, board, visited) ||
    searchWord(i, j + 1, index + 1, word, board, visited) ||
    searchWord(i, j - 1, index + 1, word, board, visited)
  ) {
    return true;
  }
  visited[i][j] = false;
  return false;
};
