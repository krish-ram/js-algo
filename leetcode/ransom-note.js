/**
 *  Leetcode Problem:
 *  Given an arbitrary ransom note string and another string containing letters from all the magazines,
 *  write a function that will
 *  return true if the ransom note can be constructed from the magazines ;
 *  otherwise, it will return false.
 *
 *  Each letter in the magazine string can only be used once in your ransom note.
 *  Note: You may assume that both strings contain only lowercase letters.
 *
 *  canConstruct("a", "b") -> false
 *  canConstruct("aa", "ab") -> false
 *  canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Here we iterate through each character in ransomNote and check whether it is present in magazine;
 * If present, we remove that character from magazine. This ensures each letter can be used once.
 * If not present, we return false, so that we dont make any further checks.
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let ind = magazine.indexOf(ransomNote[i]);
    if (ind > -1) {
      magazine = magazine.slice(0, ind) + magazine.slice(ind + 1);
    } else {
      return false;
    }
  }
  return true;
};
