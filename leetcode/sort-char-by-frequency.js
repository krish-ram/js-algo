/**
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:"tree"
Output:"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input:"cccaaa"
Output:"cccaaa"
Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input:"Aabb"
Output:"bbAa"
Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let char_count = new Map(),
    str = "";
  for (const c of s) {
    let char = char_count.get(c);
    char_count.set(c, char ? char + 1 : 1);
  }

  const charSort = new Map(
    [...char_count.entries()].sort((a, b) => b[1] - a[1])
  );
  charSort.forEach((value, key) => {
    str += key.repeat(value);
  });
  return str;
};
