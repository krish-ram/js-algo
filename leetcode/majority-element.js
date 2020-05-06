/** Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Example 1:
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 * To find the largest occuring number, we maintain a array of counts for the numbers that appear in list.
 * To avoid looping again through hashmap, as and when we get largest, we store the value and the number
 * in variable.
 */
var majorityElement = function(nums) {
  let largest = 0,
    arr = [],
    key;

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] ? arr[nums[i]] + 1 : 1;
    if (arr[nums[i]] > largest) {
      key = nums[i];
      largest = arr[nums[i]];
    }
  }
  return key;
};
