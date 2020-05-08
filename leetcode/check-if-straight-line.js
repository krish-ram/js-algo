/** You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
    Check if these points make a straight line in the XY plane.

    Example 1:
    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    Output: true

    Example 2:
    Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
    Output: false
    

    Constraints:
    2 <= coordinates.length <= 1000
    coordinates[i].length == 2
    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
    coordinates contains no duplicate point.

    Hints
    If there're only 2 points, return true.
    Check if all other points lie on the line defined by the first 2 points.
    Use cross product to check collinearity.
*/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 * Check the slope. If same, Line is in a straight line
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length === 2) return true;

  const slope = getSlope(coordinates[0], coordinates[1]);
  for (let i = 2; i < coordinates.length; i++) {
    if (slope !== getSlope(coordinates[0], coordinates[i])) return false;
  }
  return true;
};

var getSlope = function(line1, line2) {
  const [x1, y1] = line1;
  const [x2, y2] = line2;
  return Math.abs((y2 - y1) / (x2 - x1));
};
