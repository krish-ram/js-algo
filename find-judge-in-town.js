/** 
 *  In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
 * 
 *  If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.
    You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

    If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

    Example 1:
    Input: N = 2, trust = [[1,2]]
    Output: 2

    Example 2:
    Input: N = 3, trust = [[1,3],[2,3]]
    Output: 3

    Example 3:
    Input: N = 3, trust = [[1,3],[2,3],[3,1]]
    Output: -1

    Example 4:
    Input: N = 3, trust = [[1,2],[2,3]]
    Output: -1

    Example 5:
    Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
    Output: 3

    Note:
    1 <= N <= 1000
    trust.length <= 10000
    trust[i] are all different
    trust[i][0] != trust[i][1]
    1 <= trust[i][0], trust[i][1] <= N
*/
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 * Maintain an array and assign value for each person as 'P' and the person he trusts as judge 'J'. if person is judge, change to person 'P'
 * Array of parents is maintained to get a count of number of ppl trusting the judge, which should be N-1
 */
var findJudge = function (N, trust) {
  let judges = [],
    parents = [],
    judge = 0;

  for (let i = 0; i < trust.length; i++) {
    let x = trust[i][0],
      y = trust[i][1];
    judges[x] = "P";
    if (!judges[y]) judges[y] = "J";
    if (!parents[y]) parents[y] = [];
    parents[y].push(x);
  }

  for (let i = 1; i <= judges.length; i++) {
    if (judges[i] === "J") judge = i;
  }

  return judge && parents[judge].length === N - 1
    ? judge
    : !judges.length
    ? N
    : -1;
};
