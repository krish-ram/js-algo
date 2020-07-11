/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let current = head;
  let list = [];

  while (head) {
    if (head.child) {
      if (head.next) list.push(head.next);
      head.next = head.child;
      head.next.prev = head;
      head.child = null;
    } else if (!head.next && list.length) {
      head.next = list.pop();
      head.next.prev = head;
    }
    head = head.next;
  }
  return current;
};

// Better Solution
var flatten = function (head) {
  let curr = head;
  while (curr) {
    if (curr.child) {
      let child = curr.child;
      let currNext = curr.next;

      curr.next = child;
      child.prev = curr;

      while (child.next) child = child.next;

      child.next = currNext;
      if (currNext) currNext.prev = child;
    }

    curr.child = null;
    curr = curr.next;
  }

  return head;
};
