/**
 *  Given a singly linked list, group all odd nodes together followed by the even nodes. 
 *  Please note here we are talking about the node number and not the value in the nodes.
 *  You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 * 
 *  Example 1:
 *  Input: 1->2->3->4->5->NULL
 *  Output: 1->3->5->2->4->NULL

    Example 2:
    Input: 2->1->3->5->6->4->7->NULL
    Output: 2->3->6->7->1->5->4->NULL

    Note:
    The relative order inside both the even and odd groups should remain as it was in the input.
    The first node is considered odd, the second node even and so on.
 * 
 */

/**
 * Solution Notes:
 * Do the normal null checks. If the node is null, return null.
 * Then have 2 pointers. One for the odd positions and one for even position
 * In the end merge bth of them
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head == null) return null;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};

var oddEvenList = function (head) {
  const oddStart = head;
  const evenStart = head && head.next;

  let odd = oddStart;
  let even = evenStart;

  let current = even;
  let currentIsOdd = true;
  while (current && current.next) {
    current = current.next;

    if (currentIsOdd) {
      odd.next = current;
      odd = current;
    } else {
      even.next = current;
      even = current;
    }
    currentIsOdd = !currentIsOdd;
  }
  if (odd) odd.next = evenStart;
  if (even) even.next = null;

  return oddStart;
};
