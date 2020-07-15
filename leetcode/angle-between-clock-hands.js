/**
 * Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

Example 1:
Input: hour = 12, minutes = 30
Output: 165

Example 2:
Input: hour = 3, minutes = 30
Output: 75

Example 3:
Input: hour = 3, minutes = 15
Output: 7.5

Example 4:
Input: hour = 4, minutes = 50
Output: 155

Example 5:
Input: hour = 12, minutes = 0
Output: 0
 
Constraints:
1 <= hour <= 12
0 <= minutes <= 59

Answers within 10^-5 of the actual value will be accepted as correct.

Hide Hint #1  
The tricky part is determining how the minute hand affects the position of the hour hand.

Hide Hint #2  
Calculate the angles separately then find the difference.
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let hrPoints = hour * 30 + minutes / 2; //hour * (360/12) + ((360/12) * (minutes / 60));
  hrPoints = hrPoints >= 360 ? hrPoints - 360 : hrPoints;
  let minutePoints = minutes * 6; //minutes * 360/60;
  let angle = Math.abs(hrPoints - minutePoints);
  return angle > 180 ? 360 - angle : angle;
};
