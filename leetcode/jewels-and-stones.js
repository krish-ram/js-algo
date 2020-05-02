/** 
 *  Leetcode Problem:
 *  You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you     *  have. You want to know how many of the stones you have are also jewels.
 *  
 *  The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone     from "A".

    Example 1:
    Input: J = "aA", S = "aAAbbbb"
    Output: 3

    Example 2:
    Input: J = "z", S = "ZZ"
    Output: 0
   
    Note: S and J will consist of letters and have length at most 50. The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * This is a pretty straght forward question. We have 2 strings, we have to find the number of occurences of characters,
 * which are present in S which are also present in J.
 *
 * J is a set of unique charaters. S is a mixed set of random characters.
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i = 0; i < 50; i++) {
    if (J.includes(S[i])) {
      count++;
    }
  }
  return count;
};
