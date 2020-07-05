/**
 * 
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
    Given two integers x and y, calculate the Hamming distance.
    Note:
    0 ≤ x, y < 231.

    Example:
    Input: x = 1, y = 4
    Output: 2
    Explanation:
    1   (0 0 0 1)
    4   (0 1 0 0)
        ↑   ↑

    The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function (n1, n2) {
  let x = n1 ^ n2;
  let count = 0;

  while (x > 0) {
    count += x & 1;
    x >>= 1;
  }
  return count;
};

// =========================Better Solution=========================
var hammingDistance = function (x, y) {
  let d = 0;
  let h = x ^ y;
  while (h > 0) {
    d++;
    h &= h - 1;
  }
  return d;
};
