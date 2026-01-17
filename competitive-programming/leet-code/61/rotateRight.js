var rotateRight = function (head, k) {
  if (!head) return head;

  let length = 1;
  let dummy = head;

  while (dummy.next) {
    dummy = dummy.next;
    length++;
  }

  let position = k % length;
  if (position === 0) return head;

  let current = head;
  for (let i = 0; i < length - position - 1; i++) {
    current = current.next;
  }

  let newHead = current.next;
  current.next = null;
  dummy.next = head;

  return newHead;
};
