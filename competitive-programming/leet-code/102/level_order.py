from typing import List, Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []

    queue = deque([root])
    ans = []

    while queue:
        level_size = len(queue)
        row = []

        for _ in range(level_size):
            node = queue.popleft()
            row.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        ans.append(row)

    return ans