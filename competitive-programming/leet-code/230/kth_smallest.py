from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kth_smallest(root: Optional[TreeNode], k: int) -> int:
    inorder = []

    def dfs(node: Optional[TreeNode]) -> None:
        if not node:
            return
        dfs(node.left)
        inorder.append(node.val)
        dfs(node.right)

    dfs(root)
    return inorder[k - 1]