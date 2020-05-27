/**Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
 

Note:

1 <= N <= 2000
0 <= dislikes.length <= 10000
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
There does not exist i != j for which dislikes[i] == dislikes[j].
*/
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  let adjList = [],
    groups = new Array(N).fill(-1);
  for (let each of dislikes) {
    Array.isArray(adjList[each[0] - 1])
      ? adjList[each[0] - 1].push(each[1] - 1)
      : (adjList[each[0] - 1] = [each[1] - 1]);

    Array.isArray(adjList[each[1] - 1])
      ? adjList[each[1] - 1].push(each[0] - 1)
      : (adjList[each[1] - 1] = [each[0] - 1]);
  }

  for (let i = 0; i < N; i++) {
    if (groups[i] == -1 && !dfs(adjList, groups, i, 0)) return false;
  }
  return true;
};

var dfs = function (adjList, groups, i, isTrue) {
  if (groups[i] == -1) groups[i] = isTrue;
  else return groups[i] === isTrue;

  if (!adjList[i]) return true;

  for (let each of adjList[i]) {
    if (!dfs(adjList, groups, each, 1 - isTrue)) return false;
  }
  return true;
};
