var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let temp = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummy.next;
};
