/** 
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
How would you optimize the kthSmallest routine?
Hide Hint #1  Try to utilize the property of a BST.
Hide Hint #2  Try in-order traversal. (Credits to @chan13)
Hide Hint #3  What if you could modify the BST node's structure?
Hide Hint #4  The optimal runtime complexity is O(height of BST).
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let nodes = [];
  solveNodes(root, nodes);
  return nodes[k - 1];
};

var solveNodes = function (root, nodes) {
  if (!root) return;
  solveNodes(root.left, nodes);
  nodes.push(root.val);
  solveNodes(root.right, nodes);
};
