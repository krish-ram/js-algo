/** Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. 
 *  In other words, one of the first string's permutations is the substring of the second string.

    Example 1:
    Input: s1 = "ab" s2 = "eidbaooo"
    Output: True

    Explanation: s2 contains one permutation of s1 ("ba").

    Example 2:
    Input:s1= "ab" s2 = "eidboaoo"
    Output: False

    Note:
    The input strings only contain lower case letters.
    The length of both given strings is in range [1, 10,000].
*/

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// var checkInclusion = function(s1, s2) {
//     let char_count = [];
//     let s1Hash = [], s2Hash = [];
//     if(s1.length > s2.length)
//         return false;

//     let left = 0, right = 0;

//     while (right < s1.length) {
//         let rightInd = s1.charCodeAt(right) - 97;
//         s1Hash[rightInd] = s1Hash[rightInd] || 0;
//         s1Hash[rightInd]++;

//         let rightInd1 = s2.charCodeAt(right) - 97;
//         s2Hash[rightInd1] = s2Hash[rightInd1] || 0;
//         s2Hash[rightInd1]++;
//         right++;
//     }
//     console.log(right, s1Hash, s2Hash)
//     right--;
//     while (right < s2.length) {
// //this hash equals doesn't work in Javascript.
//         if(s1Hash === s2Hash)
//             return true;

//         right++;

//         if (right != s2.length) {
//             let rightInd = s2.charCodeAt(right) - 97;
//             s2Hash[rightInd] = s2Hash[rightInd] || 0;
//             s2Hash[rightInd]++;
//         }
//         let leftInd = s2.charCodeAt(left) - 97;
//         s2Hash[leftInd] = s2Hash[leftInd] || 0;
//         s2Hash[leftInd]--;
//         left++;
//     }
//     return false;
// };
