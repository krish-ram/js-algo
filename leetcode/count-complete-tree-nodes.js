/** 
 * Given a complete binary tree, count the number of nodes.

    Note:

    Definition of a complete binary tree from Wikipedia:
    In a complete binary tree every level, except possibly the last, is completely filled, 
    and all nodes in the last level are as far left as possible. 
    It can have between 1 and 2h nodes inclusive at the last level h.

    Example:

    Input: 
        1
       / \
     2   3
    / \  /
  4   5 6
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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root || !root.val) return 0;
  return countNodesRec(root);
};

var countNodesRec = function (root, count = 0) {
  count += 1;
  if (root.left) count = countNodesRec(root.left, count);

  if (root.right) count = countNodesRec(root.right, count);

  return count;
};
