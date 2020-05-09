/** Given a positive integer num, write a function which returns True if num is a perfect square else False.
    Note: Do not use any built-in library function such as sqrt.

    Example 1:    Input: 16    Output: true

    Example 2:    Input: 14    Output: false
*/

/**
 * @param {number} num
 * @return {boolean}
 * Here we follow a mathematical approach. The derivative function of num^2 is 2*num.
 * Starting at num/2, we can approach a better answer by r’=(r+num/r)/2 until the r’^2 < num.
 * Because by Newton-Raphson method, x1 = x0 - (f(x0)/f'(x0))
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let t = num / 2;
  while (t * t > num) {
    t = Math.floor((t + num / t) / 2);
  }
  return t * t == num;
};
