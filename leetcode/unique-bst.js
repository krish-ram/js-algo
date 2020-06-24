/**
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

   */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n < 2) return 1;
  let result = new Array(n + 1).fill(0);
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i <= n; i++)
    for (let j = 0; j < i; j++) result[i] += result[j] * result[i - j - 1];

  return result[n];
};

// For constructing all combination of unique BST
var contructTrees = function (start, end) {
  let list = [];
  if (start > end) {
    list.push([]);
    return list;
  }

  for (let i = start; i <= end; i++) {
    let leftSubTree = contructTrees(start, i - 1);
    let rightSubTree = contructTrees(i + 1, end);
    for (let j = 0; j < leftSubTree.length; j++)
      for (let k = 0; k < rightSubTree.length; k++)
        list.push(new TreeNode(i, leftSubTree[j], rightSubTree[k]));
  }
  return list;
};
