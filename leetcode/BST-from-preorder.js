/**
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * (Recall that a binary search tree is a binary tree where for every node,
 * any descendant of node.left has a value < node.val, and any descendant of node.
 * right has a value > node.val.
 * Also recall that a preorder traversal displays the value of the node first,
 * then traverses node.left, then traverses node.right.)
 *
 * It's guaranteed that for the given test cases there is always possible to find a
 * binary search tree with the given requirements.
 *
 * Example 1:
 * Input: [8,5,1,7,10,12]
 * Output: [8,5,10,1,7,null,12]
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let len = preorder.length;
  if (!len) return null;

  let root = new TreeNode(preorder[0]);
  if (len === 1) return root;

  constructBST(preorder, len, 1, root, 0, Number.POSITIVE_INFINITY);
  return root;
};

var constructBST = function (preorder, len, pos, node, min, max) {
  if (pos == len || preorder[pos] < min || preorder[pos] > max)
    //Boundary case
    return pos;

  //Insert in left-subtree
  if (preorder[pos] < node.val) {
    node.left = new TreeNode(preorder[pos]);
    pos += 1;
    pos = constructBST(preorder, len, pos, node.left, min, node.val - 1);
  }

  if (pos == len || preorder[pos] < min || preorder[pos] > max) return pos;

  //Insert in right-subtree
  node.right = new TreeNode(preorder[pos]);
  pos += 1;
  pos = constructBST(preorder, len, pos, node.right, node.val + 1, max);
  return pos;
};

/** Solution 2 */

var bstFromPreorder = function (preorder) {
  return createTreeNode(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

  function createTreeNode(lower, upper) {
    if (!preorder.length) {
      return null;
    }
    if (preorder[0] < lower || preorder[0] > upper) {
      return null;
    }
    const node = new TreeNode(preorder.shift());
    node.left = createTreeNode(lower, node.val);
    node.right = createTreeNode(node.val, upper);
    return node;
  }
};
