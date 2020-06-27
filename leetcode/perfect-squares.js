/**
 *  Given a positive integer n, find the least number of perfect square numbers 
    (for example, 1, 4, 9, 16, ...) which sum to n.

    Example 1:
    Input: n = 12
    Output: 3 
    Explanation: 12 = 4 + 4 + 4.

    Example 2:
    Input: n = 13
    Output: 2
    Explanation: 13 = 4 + 9.
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = i;
    let y = 1,
      sq = 1;
    while (sq <= i) {
      min = Math.min(min, 1 + dp[i - sq]);
      y++;
      sq = y * y;
    }
    dp[i] = min;
  }
  return dp[n];
};
