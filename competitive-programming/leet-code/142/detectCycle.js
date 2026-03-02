const detectCycle = head => {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return detectCyclePos(head, p2);
    }
  }
  return null;
};

const detectCyclePos = (head, intersection) => {
  let p1 = head;
  let p2 = intersection;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};