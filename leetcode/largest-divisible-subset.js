/**
    Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:
    Si % Sj = 0 or Sj % Si = 0.

    If there are multiple solutions, return any subset is fine.

    Example 1:
    Input: [1,2,3]
    Output: [1,2] (of course, [1,3] will also be ok)

    Example 2:
    Input: [1,2,4,8]
    Output: [1,2,4,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var largestDivisibleSubset = function (nums) {
  if (nums.length <= 1) return nums;

  nums.sort((a, b) => a - b);
  let set = [],
    largest = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    set[i] = [nums[i]];
    let j = i + 1;
    while (j < nums.length) {
      if (nums[j] % nums[i] === 0) {
        let newSet = set[j] || [];
        if (newSet.length + 1 > set[i].length) {
          set[i] = [nums[i], ...newSet];
          continue;
        }
      }
      j++;
    }
    if (largest.length < set[i].length) largest = set[i];
  }
  return largest;
};

//====================================== Another Solution ======================================

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  let result = [];
  nums.sort((a, b) => a - b);
  const dpCount = new Array(nums.length).fill(1);
  const prevIndex = new Array(nums.length).fill(-1);
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] == 0 && dpCount[i] < dpCount[j] + 1) {
        prevIndex[i] = j;
        dpCount[i] = dpCount[j] + 1;
        if (dpCount[i] > dpCount[maxIndex]) {
          break;
        }
      }
    }
    if (dpCount[i] > dpCount[maxIndex]) {
      maxIndex = i;
    }
  }
  let k = maxIndex;
  while (k >= 0) {
    result.push(nums[k]);
    k = prevIndex[k];
  }
  return result;
};
