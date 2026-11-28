from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def find_tilt(root: Optional[TreeNode]) -> int:
    total_tilt = 0

    def dfs(node: Optional[TreeNode]) -> int:
        nonlocal total_tilt

        if not node:
            return 0

        left_sum = dfs(node.left)
        right_sum = dfs(node.right)

        total_tilt += abs(left_sum - right_sum)

        return left_sum + right_sum + node.val

    dfs(root)
    return total_tilt