/** You are given a sorted array consisting of only integers where every element appears exactly twice, 
 *  except for one element which appears exactly once. 
 *  Find this single element that appears only once.

    Example 1:
    Input: [1,1,2,3,3,4,4,8,8]
    Output: 2

    Example 2:
    Input: [3,3,7,7,10,11,11]
    Output: 10
    
    Note: Your solution should run in O(log n) time and O(1) space
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let singleElement = null;
  for (let i = 0; i < nums.length; i++) {
    if (singleElement == null) singleElement = nums[i];
    else if (singleElement == nums[i]) singleElement = null;
    else return singleElement;
  }
  return singleElement;
};

var singleNonDuplicateBinarySearch = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    //find the middle element
    let middle = Math.floor((start + end) / 2);

    if (nums[middle + 1] === nums[middle]) {
      if (middle % 2 === 0) {
        start = middle + 1;
      } else {
        end = middle;
      }
    } else if (nums[middle - 1] === nums[middle]) {
      if (middle % 2 === 0) {
        end = middle;
      } else {
        start = middle + 1;
      }
    } else {
      return nums[middle];
    }
  }
  return -1;
};
