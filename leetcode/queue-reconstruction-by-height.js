/**
 *  Suppose you have a random list of people standing in a queue. 
 *  Each person is described by a pair of integers (h, k), 
 *  where h is the height of the person and 
 *  k is the number of people in front of this person who have a height greater than or equal to h. 
 *  Write an algorithm to reconstruct the queue.

    Note: The number of people is less than 1,100.
    
    Example
    Input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
    Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
    
    Hide Hint #1  
    What can you say about the position of the shortest person?
    If the position of the shortest person is i, how many people would be in front of the shortest person?

    Hide Hint #2  
    Once you fix the position of the shortest person, what can you say about the position of the second shortest person?
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let result = [];
  //if first values are equal, sort in ascending order of k(no of height),
  // else sort in descending order of height h;
  people.sort(([a1, a2], [b1, b2]) => (a1 == b1 ? a2 - b2 : b1 - a1));

  //Once sorted, insert each into the index, k
  for (let each of people) result.splice(each[1], 0, each);

  return result;
};
