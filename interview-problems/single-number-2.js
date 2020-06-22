/**
 * Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

    Note:
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    Example 1:
    Input: [2,2,3,2]
    Output: 3

    Example 2:
    Input: [0,1,0,1,0,1,99]
    Output: 99
*/

//  ================== Solution with Sorting =================

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let n = nums.length;

  if (n < 3) return nums[0];

  nums.sort((a, b) => a - b);
  if (nums[0] != nums[1]) return nums[0];
  let i = 1;
  while (i < n) {
    if (nums[i] != nums[i - 1]) return nums[i - 1];
    i += 3;
  }
  return nums[n - 1];
};

//  ================== Solution with Power =================

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let a = 0,
    b = 0;
  for (let i = 0; i < nums.length; i++) {
    b = (b ^ nums[i]) & ~a;
    a = (a ^ nums[i]) & ~b;
  }
  return b;
};
