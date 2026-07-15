from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def is_subtree(self, root: Optional[TreeNode], sub_root: Optional[TreeNode]) -> bool:
        def serialize(node: Optional[TreeNode]) -> str:
            if not node:
                return ',#'
            
            return f',{node.val}' + serialize(node.left) + serialize(node.right)

        root_str = serialize(root)
        sub_str = serialize(sub_root)

        return sub_str in root_str