/** Given the root node of a binary search tree (BST) and a value. 
 * You need to find the node in the BST that the node's value equals the given value. 
 * Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

    For example, 

    Given the tree:
        4
       / \
      2   7
     / \
    1   3

    And the value to search: 2
    You should return this subtree:

      2     
     / \   
    1   3
    In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
    Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let node = searchRecBST(root, val);
  return node ? node : null;
};

var searchRecBST = function (root, val) {
  if (root.val === val) return root;

  if (root.left) {
    let node = searchRecBST(root.left, val);
    if (node) return node;
  }

  if (root.right) {
    let node = searchRecBST(root.right, val);
    if (node) return node;
  }
};

// ======================== Search in a Binary Search Tree ========================

var searchBST = function (root, val) {
  let result = null;
  open(root);
  return result;

  function open(tree) {
    if (result || !tree) return;
    if (tree.val === val) result = tree;

    open(tree.left);
    open(tree.right);
  }
};
