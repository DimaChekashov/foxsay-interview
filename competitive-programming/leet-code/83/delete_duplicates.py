class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head):
        if not head:
            return head
        
        current = head
        while current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next
        return head

def print_linked_list(head):
    current = head
    values = []
    while current:
        values.append(str(current.val))
        current = current.next
    print(" -> ".join(values) if values else "Empty list")

if __name__ == "__main__":
    solution = Solution()
    head1 = ListNode(1, ListNode(1, ListNode(2)))
    print_linked_list(head1)
    result1 = solution.deleteDuplicates(head1)
    print_linked_list(result1)
    print()