/**
 * Given a non-empty array of integers, return the k most frequent elements.

    Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    
    Example 2:
    Input: nums = [1], k = 1
    Output: [1]

    Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
    It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
    You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let freq = {},
    freqList = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freq.hasOwnProperty(nums[i])) freq[nums[i]] = 1;
    else freq[nums[i]] += 1;
  }
  for (const [key, value] of Object.entries(freq)) {
    if (!freqList.hasOwnProperty(value)) freqList[value] = [key];
    else freqList[value].push(key);
  }
  let result = [];
  for (let j = nums.length; j > 0; j--) {
    if (freqList.hasOwnProperty(j)) result = [...result, ...freqList[j]];
    if (result.length >= k) break;
  }
  return result;
};

// Better Solution
var topKFrequent = function (nums, k) {
  let res = [],
    map = new Map();
  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));
  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }
  return res;
};
