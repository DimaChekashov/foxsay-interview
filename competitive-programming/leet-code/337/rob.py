from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rob(root: Optional[TreeNode]) -> int:
    def dfs(node: Optional[TreeNode]) -> tuple:
        if not node:
            return (0, 0)

        left_rob, left_not = dfs(node.left)
        right_rob, right_not = dfs(node.right)

        rob_current = node.val + left_not + right_not
        skip_current = max(left_rob, left_not) + max(right_rob, right_not)

        return (rob_current, skip_current)

    rob_root, skip_root = dfs(root)
    return max(rob_root, skip_root)