/** Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

Example 1:
Input: "banana"
Output: "ana"

Example 2:
Input: "abcd"
Output: ""

Note:
2 <= S.length <= 10^5
S consists of lowercase English letters.

Hide Hint #1  
Binary search for the length of the answer. (If there's an answer of length 10, then there are answers of length 9, 8, 7, ...)

Hide Hint #2  
To check whether an answer of length K exists, we can use Rabin-Karp 's algorithm.
*/

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
  let n = S.length,
    nums = S.split("");
  let left = 0,
    right = n,
    mod = 37;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (search(mid, n, nums) != -1) left = mid + 1;
    else right = mid - 1;
  }
  let start = search(left - 1, n, nums);
  return S.substring(satrt, start + left - 1);
};

var search = function (left, len, nums) {
  let hash = 0;
  for (let i = 0; i < left; i++) {
    hash = (hash * 26 + (nums[i].charCodeAt(0) - 97)) % mod;
  }

  let hashSet = {};
  hashSet[h] = h;
  let k = 1;

  for (let i = 1; i <= left; i++) k = (k * 26) % mod;

  for (let i = 1; i < n - l + 1; i++) {
    h = (h * 26 - (((nums[i - 1].charCodeAt(0) - 97) * k) % mod) + mod) % mod;
    h = (h + nums[i + l - 1].charCodeAt(0) - 97) % mod;
    if (hashSet.hasOwnProperty(h)) return i;
    hashSet[h] = h;
  }
  return -1;
};
