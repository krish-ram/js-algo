var bstFromPreorder = function (arr) {
  class TreeNode {
    constructor(value) {
      this.val = value;
    }
  }

  return createTreeNode(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

  function createTreeNode(lower, upper) {
    if (!arr.length) {
      return null;
    }
    if (arr[0] < lower || arr[0] > upper) {
      return null;
    }
    const thisNode = new TreeNode(arr.shift());
    thisNode.left = createTreeNode(lower, thisNode.val);
    thisNode.right = createTreeNode(thisNode.val, upper);
    return thisNode;
  }
};
