/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (ie, from left to right, then right to left for the next level and alternate between).

   For example:
   Given binary tree [3,9,20,null,null,15,7],
          3
         / \
        9  20
        /  \
       15   7
   return its zigzag level order traversal as: [  [3],  [20,9],  [15,7] ]
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let result = [],
    level = 0;
  zigzaghelper(root, level, result);
  return result;
};

var zigzaghelper = function (root, level, res) {
  if (!root) return null;

  if (res.length < level + 1) res.push([]);

  if (level % 2 == 1) res[level].push(root.val);
  else res[level].unshift(root.val);

  zigzaghelper(root.right, level + 1, res);
  zigzaghelper(root.left, level + 1, res);
};
