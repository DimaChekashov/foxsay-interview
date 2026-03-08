var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const merge = (left, right) => {
    const dummy = new ListNode(-1);
    let curr = dummy;

    while (left && right) {
      if (left.val <= right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }

    curr.next = left || right;

    return dummy.next;
  };

  const findMiddle = (node) => {
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const mid = findMiddle(head);
  const rightHead = mid.next;
  mid.next = null;

  const sortedLeft = sortList(head);
  const sortedRight = sortList(rightHead);

  return merge(sortedLeft, sortedRight);
};