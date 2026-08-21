from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def binary_tree_paths(root: Optional[TreeNode]) -> List[str]:
    if not root:
        return []

    result = []
    stack = [(root, str(root.val))]

    while stack:
        node, path = stack.pop()

        if not node.left and not node.right:
            result.append(path)

        if node.right:
            stack.append((node.right, f"{path}->{node.right.val}"))

        if node.left:
            stack.append((node.left, f"{path}->{node.left.val}"))

    return result