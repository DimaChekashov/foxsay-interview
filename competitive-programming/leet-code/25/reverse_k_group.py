from typing import Optional, Tuple

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    dummy = ListNode(0)
    dummy.next = head
    ptr = dummy

    while ptr is not None:
        tracker = ptr

        for _ in range(k):
            if tracker is None:
                break
            tracker = tracker.next

        if tracker is None:
            break

        prev, curr = reverse_linked_list(ptr.next, k)

        last_node_of_reversed_group = ptr.next
        last_node_of_reversed_group.next = curr
        ptr.next = prev
        ptr = last_node_of_reversed_group

    return dummy.next


def reverse_linked_list(head: Optional[ListNode], k: int) -> Tuple[Optional[ListNode], Optional[ListNode]]:
    prev = None
    curr = head
    nxt = None

    for _ in range(k):
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev, curr