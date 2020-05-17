/** 
 *  Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
    Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
    The order of output does not matter.

    Example 1:
    Input:s: "cbaebabacd" p: "abc"
    Output:[0, 6]

    Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".

    Example 2:
    Input:  s: "abab" p: "ab"
    Output: [0, 1, 2]

    Explanation:
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let index = [];

  if (!s || !s.length) return index;

  let char_count = [];
  for (let char of p) {
    let ind = char.charCodeAt(0) - 97;
    char_count[ind] = char_count[ind] || 0;
    char_count[ind]++;
  }
  // A variation of sliding window: The left and right end represent the end of a window.
  // count gives # elements remaining to be visited in the window, till we slide the window.
  let left = 0,
    right = 0,
    count = p.length;

  while (right < s.length) {
    let rightInd = s.charCodeAt(right) - 97;
    if (char_count[rightInd] >= 1) count--;
    char_count[rightInd]--;
    right++;
    console.log(s.charAt(right), char_count[s.charCodeAt(right) - 97], right);

    if (count === 0) index.push(left);

    //If you have traversed a window completely. Once you've traversed the first p.length elements
    // ie. the first window this would always be true,
    // this is here just so that we completely scan our first window, without incrementing left.
    let leftInd = s.charCodeAt(left) - 97;
    if (right - left === p.length) {
      if (char_count[leftInd] >= 0) {
        // This would increment toVisit for characters which were found at right end and were
        // present in p(charCount) because of which we decremented toVisit in the first if block
        // and then some characters of p were not found in the window so we need to increment.
        count++;
      }
      char_count[leftInd]++;
      left++; // Just to slide the window.
    }
  }
  return index;
};
