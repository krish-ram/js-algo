/**
 *  Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

    Note:
    The length of num is less than 10002 and will be ≥ k.
    The given um does not contain any leading zero.

    Example 1:
    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

    Example 2:
    Input: num = "10200", k = 1
    Output: "200"
    Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

    Example 3:
    Input: num = "10", k = 2
    Output: "0"
    Explanation: Remove all the digits from the number and it is left with nothing which is 0.

*/
var removeKdigits = function (num, k) {
  if (num.length === k) return "0";
  // save maximum
  let result = [num[0]];
  let i = 1;

  while (i < num.length && k > 0) {
    const str = num[i];
    if (str >= result[result.length - 1]) {
      result.push(str);
    } else {
      while (result.length > 0 && str < result[result.length - 1] && k > 0) {
        result.pop();
        k -= 1;
      }
      result.push(str);
    }
    i += 1;
  }

  const strs = result.slice(0, result.length - k).join("") + num.slice(i);
  let start = 0;
  while (strs[start] === "0") start += 1;
  const final = strs.slice(start);
  return final || "0";
};
