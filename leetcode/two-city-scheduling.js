/**
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], 
and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Note:
1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let totalCost = 0;
  costs.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  for (let i = 0; i < costs.length; i++)
    totalCost += costs[i][i < costs.length / 2 ? 1 : 0];
  return totalCost;
};

// ========================================================================
// Solution 2: 44ms

var twoCitySchedCost = function (costs) {
  return costs
    .sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
    .map((cost, index) => (index < costs.length / 2 ? cost[0] : cost[1]))
    .reduce((total, val) => (total += val), 0);
};
