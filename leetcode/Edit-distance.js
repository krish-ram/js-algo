/** Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

    You have the following 3 operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character

    Example 1:
    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation:
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')

    Example 2:
    Input: word1 = "intention", word2 = "execution"
    Output: 5
    Explanation:
    intention -> inention (remove 't')
    inention -> enention (replace 'i' with 'e')
    enention -> exention (replace 'n' with 'x')
    exention -> exection (replace 'n' with 'c')
    exection -> execution (insert 'u')
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let distArr = new Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i++)
    distArr[i] = new Array(word2.length + 1).fill(0);

  for (let i = 0; i <= word1.length; i++)
    for (let j = 0; j <= word2.length; j++)
      if (i === 0) distArr[0][j] = j;
      else if (j === 0) distArr[i][0] = i;
      else if (word1[i - 1] == word2[j - 1])
        distArr[i][j] = distArr[i - 1][j - 1];
      else
        distArr[i][j] =
          1 +
          Math.min(distArr[i - 1][j - 1], distArr[i][j - 1], distArr[i - 1][j]);

  return distArr[word1.length][word2.length];
};
