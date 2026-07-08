from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def path_sum(self, root: Optional[TreeNode], target_sum: int) -> List[List[int]]:
        res = []
        
        def dfs(node: Optional[TreeNode], cur_sum: int, path: List[int]) -> None:
            if not node:
                return
            
            cur_sum += node.val
            path.append(node.val)
            
            if not node.left and not node.right and cur_sum == target_sum:
                res.append(path[:])
            
            dfs(node.left, cur_sum, path)
            dfs(node.right, cur_sum, path)
            
            path.pop()
        
        dfs(root, 0, [])
        return res
