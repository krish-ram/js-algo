/**
 *  Given two binary strings, return their sum (also a binary string).
    The input strings are both non-empty and contains only characters 1 or 0.

    Example 1:
    Input: a = "11", b = "1"
    Output: "100"

    Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"
    
    Constraints:
    Each string consists only of '0' or '1' characters.
    1 <= a.length, b.length <= 10^4
    Each string is either "0" or doesn't contain any leading zero.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = [];
  let carry = 0;
  let i = a.length - 1; // a pointer
  let j = b.length - 1; // b pointer

  while (i >= 0 || j >= 0) {
    let aInt = parseInt(a[i] || 0);
    let bInt = parseInt(b[j] || 0);
    let val = aInt + bInt + carry;
    carry = val > 1 ? 1 : 0;
    sum.unshift(val === 1 || val === 3 ? 1 : 0);
    i--;
    j--;
  }

  return (carry ? [1, ...sum] : sum).join("");
};
