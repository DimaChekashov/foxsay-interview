var reverseKGroup = function (head, k) {
  const dummy = new LinkedListNode(0);
  dummy.next = head;
  let ptr = dummy;

  while (ptr !== null) {

    let tracker = ptr;

    for (let i = 0; i < k; i++) {
      if (tracker === null) {
        break;
      }
      tracker = tracker.next;
    }

    if (tracker === null) {
      break;
    }

    const updatedNodes = reverseLinkedList(ptr.next, k);
    const previous = updatedNodes[0];
    const current = updatedNodes[1];

    const lastNodeOfReversedGroup = ptr.next;
    lastNodeOfReversedGroup.next = current;
    ptr.next = previous;
    ptr = lastNodeOfReversedGroup;
  }

  return dummy.next;
};

function reverseLinkedList(head, k) {
  let previous = null;
  let current = head;
  let next = null;

  for (let i = 0; i < k; i++) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return [previous, current];
}