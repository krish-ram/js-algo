/**
 * @param {number[]} citations
 * @return {number}
 */
// O(log n) Solution

var hIndex = function (citations) {
  let len = citations.length;
  let l = 0,
    r = len - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    citations[mid] < len - mid ? (l = mid + 1) : (r = mid - 1);
  }
  return len - l;
};

// O(n) Solution
var hIndex = function (citations) {
  let len = citations.length;
  let i = len - 1;
  while (i >= 0) {
    if (citations[i] < len - i) break;
    i--;
  }
  return len - i - 1;
};
