/** Given an array w of positive integers, where w[i] describes the weight of index i, 
    write a function pickIndex which randomly picks an index in proportion to its weight.

    Note:
    1 <= w.length <= 10000
    1 <= w[i] <= 10^5
    pickIndex will be called at most 10000 times.

    Example 1:
    Input: 
    ["Solution","pickIndex"]
    [[[1]],[]]
    Output: [null,0]

    Example 2:
    Input: 
    ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
    [[[1,3]],[],[],[],[],[]]

    Output: [null,0,1,1,1,0]

    Explanation of Input Syntax:
    The input is two lists: the subroutines called and their arguments. 
    Solution's constructor has one argument, the array w. pickIndex has no arguments. 
    Arguments are always wrapped with a list, even if there aren't any.
    */

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  let sum = 0;
  this.sumArr = [];
  for (each of w) {
    sum += each;
    this.sumArr.push(sum);
  }
  this.totalSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let random_num = this.totalSum * Math.random();
  let low = 0,
    high = this.sumArr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (random_num > this.sumArr[mid]) low = mid + 1;
    else high = mid;
  }
  return low;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
