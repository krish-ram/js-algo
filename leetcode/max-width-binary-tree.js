/** 
 * Given a binary tree, write a function to get the maximum width of the given tree. 
 * The width of a tree is the maximum width among all levels. 
 * The binary tree has the same structure as a full binary tree, but some nodes are null.

    The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, 
    where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:
Input: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

Example 2:
Input: 

          1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).

Example 3:
Input: 
          1
         / \
        3   2 
       /        
      5      

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
Note: Answer will in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let max = 1;
  let stack = [];

  const width = (root, level, pos) => {
    if (root == null) {
      return;
    }

    if (level >= stack.length) {
      stack.push(pos);
    } else max = Math.max(max, pos - stack[level] + 1);

    width(root.left, level + 1, 2 * pos);
    width(root.right, level + 1, 2 * pos + 1);
  };

  width(root, 0, 1);

  return max;
};
// ===================================Solution to get actual width =================================
var getMaxWidth = function (root) {
  let h = height(root);
  let count = new Array(h).fill(0);
  let level = 0;

  count = getMaxWidthRecur(root, count, level);
  return Math.max(...count);
};

var getMaxWidthRecur = function (root, count, level) {
  if (root) {
    count[level] += 1;
    count = getMaxWidthRecur(root.left, count, level);
    count = getMaxWidthRecur(root.right, count, level);
  }
  return count;
};

let height = function (root) {
  if (!root) return 0;
  else {
    let lHeight = height(root.left);
    let rHeight = height(root.right);
    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
  }
};
