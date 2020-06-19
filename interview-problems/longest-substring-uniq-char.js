/** 
 * Given a string str, find the length of the longest substring without repeating characters.

    For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.
    For “BBBB” the longest substring is “B”, with length 1.
    For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7

*/

function longestUniqueSubsttr(str) {
  let n = str.length;
  let lastIndex = []; // if lastIndex is undefined, return -1
  let res = 0; // result
  let i = 0; //Initialize start of current window

  // Move end of current window
  for (let j = 0; j < n; j++) {
    // Find the last index of str[j]
    // Update i (starting index of current window as maximum of current value of i and last index plus 1

    i = Math.max(i, (lastIndex[str[j]] || -1) + 1);

    // Update result if we get a larger window
    res = Math.max(res, j - i + 1);

    // Update last index of j.
    lastIndex[str[j]] = j;
  }
  return res;
}
let str = "geeksforgeeks";
let res = longestUniqueSubsttr(str);
console.log(res);
