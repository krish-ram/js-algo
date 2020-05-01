/** 
 *      Leetcode Problem:
 *      You are a product manager and currently leading a team to develop a new
        product. Unfortunately, the latest version of your product fails the
        quality check. Since each version is developed based on the previous
        version, all the versions after a bad version are also bad. Suppose you
        have n versions [1, 2, ..., n] and you want to find out the first bad
        one, which causes all the following ones to be bad. You are given an API
        bool isBadVersion(version) which will return whether version is bad.
        Implement a function to find the first bad version. You should minimize
        the number of calls to the API. Example:

        Given n = 5, and version = 4 is the first bad version. 
        call isBadVersion(3) -> false 
        call isBadVersion(5) -> true 
        call isBadVersion(4) -> true 
        Then 4 is the first bad version.
        
 */

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  // this is basically a binary search implementation.
  // We find a mid point and if the middle one is bad version then we check the left side
  // if not, we test on the right side of the mid point
  return function(n) {
    let left = 0,
      right = n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      isBadVersion(mid) ? (right = mid) : (left = mid + 1);
    }
    // if all test are complete, we would reach left == right
    return left === right && isBadVersion(left) ? left : -1;
  };
};
