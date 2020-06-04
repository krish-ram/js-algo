/** Write a function that reverses a string. The input string is given as an array of characters char[].
    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
    You may assume all the characters consist of printable ascii characters.

    Example 1:
    Input: ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:
    Input: ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

    Hide Hint #1  
    The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
*/
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    const lTemp = s[l];
    const rTemp = s[r];
    if (lTemp && rTemp) {
      s[l] = rTemp;
      s[r] = lTemp;
    }
    l++;
    r--;
  }
};
