/** 
 * Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example: Input: nums = [1,2,3]
Output: [  [3],  [1],  [2],  [1,2,3],  [1,3],  [2,3],  [1,2],  [] ]
 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; i++) {
    const size = res.length;
    for (let j = 0; j < size; j++) res.push([...res[j], nums[i]]);
  }
  return res;
};

//Better Solution
var subsets = function (nums) {
  let subsetsArray = [[]];
  for (let i = 0; i < nums.length; i++) {
    subsetsArray.forEach((array) => {
      subsetsArray.push(array.concat(nums[i]));
    });
  }
  return subsetsArray;
};
