/** 
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[ [15,7], [9,20], [3] ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  result = [];
  if (!root) return result;
  let que = [root];
  while (que.length > 0) {
    let nodes = [];
    let n = que.length;
    for (let i = 0; i < n; i++) {
      let node = que.shift();
      nodes.push(node.val);
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    result.unshift(nodes);
  }
  return result;
};
