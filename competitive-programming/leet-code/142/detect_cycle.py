from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def detect_cycle(head: Optional[ListNode]) -> Optional[ListNode]:
    p1 = head
    p2 = head

    while p2 and p2.next and p2.next.next:
        p1 = p1.next
        p2 = p2.next.next

        if p1 is p2:
            return detect_cycle_pos(head, p2)

    return None


def detect_cycle_pos(head: ListNode, intersection: ListNode) -> ListNode:
    p1 = head
    p2 = intersection

    while p1 is not p2:
        p1 = p1.next
        p2 = p2.next

    return p1