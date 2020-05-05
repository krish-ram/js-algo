// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hashMap = {},
    indexMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hashMap.hasOwnProperty(s[i])) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
      indexMap[s[i]] = i;
    }
  }

  for (let key in hashMap) {
    if (hashMap[key] === 1) {
      return indexMap[key];
    }
  }
  return -1;
};
