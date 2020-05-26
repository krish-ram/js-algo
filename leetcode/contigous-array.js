/**
 *  Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
    Example 1:
    Input: [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
    
    Example 2:
    Input: [0,1,0]
    Output: 2
    Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
    Note: The length of the given binary array will not exceed 50,000.
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let hashMap = {};
  let subArr = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 1 ? count++ : count--;
    if (count === 0) subArr = i + 1;
    if (hashMap.hasOwnProperty(count))
      subArr = Math.max(subArr, i - hashMap[count]);
    else hashMap[count] = i;
  }
  return subArr;
};
