// Implement a trie with insert, search, and startsWith methods.

// Example:
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/**
 * Initialize your data structure here.
 */
var TrieNode = function (val = null) {
  this.val = val;
  this.children = new Map();
  this.end = false;
};
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let parent = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!parent.children.has(word[i]))
      parent.children.set(word[i], new TrieNode(word[i]));
    parent = parent.children.get(word[i]);
    if (i === word.length - 1) parent.end = true;
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let parent = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!parent.children.has(word[i])) return false;
    parent = parent.children.get(word[i]);
    if (i === word.length - 1) return parent.end;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let parent = this.root;

  for (let i = 0; i < prefix.length; i++) {
    if (!parent.children.has(prefix[i])) return false;
    parent = parent.children.get(prefix[i]);
    if (i === prefix.length - 1) return true;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
