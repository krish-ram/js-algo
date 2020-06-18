/**
 *  Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

    Here, a circular array means the end of the array connects to the beginning of the array.  
    (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

    Also, a subarray may only include each element of the fixed buffer A at most once. 
    (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

    Example 1:
    Input: [1,-2,3,-2]
    Output: 3
    Explanation: Subarray [3] has maximum sum 3

    Example 2:
    Input: [5,-3,5]
    Output: 10
    Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

    Example 3:
    Input: [3,-1,2,-1]
    Output: 4
    Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

    Example 4:
    Input: [3,-2,2,-3]
    Output: 3
    Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

    Example 5:
    Input: [-2,-3,-1]
    Output: -1
    Explanation: Subarray [-1] has maximum sum -1

    Note:
    -30000 <= A[i] <= 30000
    1 <= A.length <= 30000

    Hint #1  
    For those of you who are familiar with the Kadane's algorithm, think in terms of that. For the newbies, Kadane's algorithm is used to finding the maximum sum subarray from a given array. This problem is a twist on that idea and it is advisable to read up on that algorithm first before starting this problem. Unless you already have a great algorithm brewing up in your mind in which case, go right ahead!

    Hint #2  
    What is an alternate way of representing a circular array so that it appears to be a straight array? Essentially, there are two cases of this problem that we need to take care of. Let's look at the figure below to understand those two cases:

    Hint #3  
    The first case can be handled by the good old Kadane's algorithm. However, is there a smarter way of going about handling the second case as well?

    Note:
    Case 1: The elements that contribute to the maximum sum are arranged such that no wrapping is there. Examples: {-10, 2, -1, 5}, {-2, 4, -1, 4, -1}. In this case, Kadane’s algorithm will produce the result.

    Case 2: The elements which contribute to the maximum sum are arranged such that wrapping is there. Examples: {10, -12, 11}, {12, -5, 4, -8, 11}. In this case, we change wrapping to non-wrapping. Let us see how. Wrapping of contributing elements implies non wrapping of non contributing elements, so find out the sum of non contributing elements and subtract this sum from the total sum. To find out the sum of non contributing, invert sign of each element and then run Kadane’s algorithm.
    Our array is like a ring and we have to eliminate the maximum continuous negative that implies maximum continuous positive in the inverted arrays.

    Finally we compare the sum obtained by both cases, and return the maximum of the two sums.
*/

/**
 * @param {number[]} A
 * @return {number}
 */

var maxKadane = function (A) {
  let max_so_far = 0,
    max_ending_here = 0;

  for (let i = 0; i < A.length; i++) {
    max_ending_here = max_ending_here + A[i];
    if (max_ending_here < 0) max_ending_here = 0;
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
  }
  return max_so_far;
};

var maxSubarraySumCircular = function (A) {
  let max_kadane = maxKadane(A);
  let max_wrap = 0;
  let allNegative = true;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) allNegative = false;
    max_wrap += A[i];
    A[i] = -A[i];
  }
  if (allNegative) return -Math.min(...A);

  max_wrap = max_wrap + maxKadane(A);
  return max_wrap > max_kadane ? max_wrap : max_kadane;
};
