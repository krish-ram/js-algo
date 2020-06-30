/** 
 * Given a 2D board and a list of words from the dictionary, find all words in the board.

    Each word must be constructed from letters of sequentially adjacent cell, 
    where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

    Example:
    Input: 
    board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
    ]
    words = ["oath","pea","eat","rain"]
    Output: ["eat","oath"]


    Note:
    All inputs are consist of lowercase letters a-z.
    The values of words are distinct.

    Hide Hint #1  
    You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?

    Hide Hint #2  
    If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. 
    What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? 
    If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
    */

var findWords = function (board, words) {
  const trie = trieBuilder(words);
  const output = [];

  let searchWord = (board, i, j, node) => {
    if (!node) return;
    if (node.word != null) {
      output.push(node.word);
      node.word = null;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return;
    }
    let letter = board[i][j];
    board[i][j] = "*";
    searchWord(board, i - 1, j, node.map[letter]);
    searchWord(board, i + 1, j, node.map[letter]);
    searchWord(board, i, j - 1, node.map[letter]);
    searchWord(board, i, j + 1, node.map[letter]);
    board[i][j] = letter;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      searchWord(board, i, j, trie);
    }
  }
  return output;
};

let trieBuilder = (words) => {
  let root = { map: {} };
  for (let word of words) trieHelper(word, 0, root);
  return root;
};

let trieHelper = (word, i, node) => {
  if (word.length == i) {
    node.word = word;
    return;
  }

  if (!node.map[word.charAt(i)]) {
    node.map[word.charAt(i)] = { map: {} };
  }

  return trieHelper(word, i + 1, node.map[word.charAt(i)]);
};
