from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def recover_tree(root: Optional[TreeNode]) -> None:
    first = None
    second = None
    prev = None

    def inorder(node: Optional[TreeNode]) -> None:
        nonlocal first, second, prev

        if not node:
            return

        inorder(node.left)

        if prev and prev.val > node.val:
            if not first:
                first = prev
            second = node

        prev = node

        inorder(node.right)

    inorder(root)

    if first and second:
        first.val, second.val = second.val, first.val