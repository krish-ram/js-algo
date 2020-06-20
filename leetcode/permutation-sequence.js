/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function (n, k) {
  let factorial = [1],
    str = [],
    digits = [];

  let p = 1;
  // GET THE FACTORIAL
  for (let i = 1; i <= n; i++) {
    p *= i;
    factorial[i] = p;
    digits.push(i);
  }
  //K-- SINCE WE ARE STARTING FROM 0
  k--;

  for (let i = 0; i < n; i++) {
    let index = Math.floor(k / factorial[n - i - 1]);

    str[i] = "" + digits[index];
    digits = digits.filter((each) => each != digits[index]);

    k %= factorial[n - i - 1];
  }
  return str.join("");
};

// =============== TO BE EXPLORED

// Backtracking solution: count every time reach the leaves
// Time: O(n!), 166ms
// Space: O(n), 34mb
// class Solution {
//     int k;
//     String ans;

//     public String getPermutation(int n, int k) {
//         this.k = k;
//         char[] str = new char[n];

//         DFS(n, str, new boolean[n], 0);

//         return ans;
//     }

//     private void DFS(int n, char[] str, boolean[] used, int index) {
//         // Base case
//         if(index == n) {
//             if(--k == 0) {
//                 ans = new String(str);
//             }
//             return;
//         }

//         for(int i = 0; i < n; i++) {
//             if(!used[i]) {
//                 // Select
//                 str[index] = (char) ('0' + i + 1);
//                 used[i] = true;

//                 DFS(n, str, used, index + 1);

//                 // !!: Return immediately after the kth is found
//                 if(k == 0) return;

//                 // Unselect, str[i] would be wiped out in next iteration
//                 used[i] = false;
//             }
//         }
//     }
// }
