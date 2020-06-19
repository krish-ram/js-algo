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
  let left = 1,
    right = n,
    mod = 37;

  while (left != right) {
    let mid = Math.floor((left + right) / 2);
    if (search(mid, n, nums) != -1) left = mid + 1;
    else right = mid;
  }
  let start = search(left - 1, n, nums);
  return start != -1 ? S.substring(start, start + left - 1) : "";
};

var search = function (left, len, nums) {
  let hash = 0,
    mod = 4294967296;
  for (let i = 0; i < left; i++) {
    hash = (hash * 26 + (nums[i].charCodeAt(0) - 97)) % mod;
  }

  let hashSet = {};
  hashSet[hash] = hash;
  let k = 1;

  for (let i = 1; i <= left; i++) k = (k * 26) % mod;

  for (let i = 1; i < len - left + 1; i++) {
    hash =
      (hash * 26 - (((nums[i - 1].charCodeAt(0) - 97) * k) % mod) + mod) % mod;
    hash = (hash + (nums[i + left - 1].charCodeAt(0) - 97)) % mod;
    if (hashSet.hasOwnProperty(hash)) return i;
    hashSet[hash] = hash;
  }
  return -1;
};

//  ============== Solution 2 ================

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (s) {
  if (!s.length) {
    return "";
  }
  let start = 1,
    end = s.length,
    mid;
  while (start + 1 < end) {
    mid = Math.floor((start + end) / 2);
    if (hasDuplicate(s, mid) >= 0) {
      // console.log("start", mid)
      start = mid;
    } else {
      end = mid;
    }
  }
  // console.log(start, end)
  let idx = hasDuplicate(s, end);
  if (idx >= 0) {
    return s.substring(idx, idx + end);
  }
  idx = hasDuplicate(s, start);
  if (idx >= 0) {
    return s.substring(idx, idx + start);
  }
  return "";
};
function hasDuplicate(s, len) {
  const BASE = 10000007;
  let power = 1;
  for (let i = 0; i < len; i++) {
    power = (power * 31) % BASE;
  }
  //   console.log(len)
  const map = new Map();
  let hashCode = 0;
  for (let i = 0; i < s.length; i++) {
    const nowCh = s.charCodeAt(i);
    hashCode = (hashCode * 31 + s.charCodeAt(i)) % BASE;
    if (i < len - 1) {
      continue;
    }
    if (i >= len) {
      hashCode = hashCode - ((s.charCodeAt(i - len) * power) % BASE);
      if (hashCode < 0) {
        hashCode += BASE;
      }
      //    console.log(map)
      // console.log(i, hashCode)
      if (map.has(hashCode)) {
        const start = map.get(hashCode);
        // console.log(start,s.substring(start, start + len) , i - len + 1, len, s.substring(i - len + 1, i + 1))
        if (
          s.substring(start, start + len) === s.substring(i - len + 1, i + 1)
        ) {
          //  console.log(222)
          return start;
        }
      }
    }
    map.set(hashCode, i - len + 1);
  }
  return -1;
}

// ============ Solution 3 ===============

const isOneLetterString = (s) => {
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
  let n = S.length;
  if (n < 2) {
    return "";
  }

  if (isOneLetterString(S)) {
    return S.substr(1, n);
  }

  let sufixes = [];

  for (let i = 0; i < n; i++) {
    sufixes.push(S.substr(i, n - 1));
  }
  let found = "";
  sufixes.sort();
  for (let i = 0; i < sufixes.length - 1; i++) {
    if (
      found.length < sufixes[i].length &&
      found.length < sufixes[i + 1].length
    ) {
      let j = 0;
      while (sufixes[i][j] === sufixes[i + 1][j]) {
        j++;
      }
      if (j > 0 && j > found.length) {
        found = sufixes[i].substr(0, j);
      }
    }
  }
  return found;
};
