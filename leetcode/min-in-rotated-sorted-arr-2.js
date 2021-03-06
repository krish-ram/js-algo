/**
 *  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

    Find the minimum element.
    The array may contain duplicates.

    Example 1:    Input: [1,3,5]    Output: 1

    Example 2:    Input: [2,2,2,0,1]    Output: 0

    Note:
    This is a follow up problem to Find Minimum in Rotated Sorted Array.
    Would allow duplicates affect the run-time complexity? How and why?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (!nums || !nums.length) return -1;

  var left = 0,
    mid = 0,
    right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] === nums[right]) left++;

    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= nums[left]) {
      if (nums[mid] <= nums[right]) right = mid;
      else left = mid + 1;
    } else right = mid;
  }

  return nums[left];
};

//===================+Solution 2 =========================
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  for (let i = 1; i < nums.length; i++)
    if (nums[i] < nums[i - 1]) return nums[i];
  return nums[0] || null;
};
