from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def tree_to_list(root: Optional[TreeNode]) -> List[Optional[int]]:
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    
    while result and result[-1] is None:
        result.pop()
    
    return result

class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        if n == 0:
            return []
        
        memo = {}

        def generate_trees(start, end):
            if (start, end) in memo:
                return memo[(start, end)]
            
            trees = []
            if start > end:
                trees.append(None)
                return trees
            
            for root_val in range(start, end + 1):
                left_trees = generate_trees(start, root_val - 1)
                right_trees = generate_trees(root_val + 1, end)
            
                for left_tree in left_trees:
                    for right_tree in right_trees:
                        root = TreeNode(root_val, left_tree, right_tree)
                        trees.append(root)
            
            memo[(start, end)] = trees
            return trees

        return generate_trees(1, n)

if __name__ == "__main__":
    solution = Solution()
    
    trees_3 = solution.generateTrees(3)
    trees_1 = solution.generateTrees(1)
    
    print(f"n=3: {len(trees_3)} деревьев")
    print("Структуры деревьев:")
    for i, tree in enumerate(trees_3):
        print(f"  {i+1}: {tree_to_list(tree)}")
    
    print(f"\nn=1: {len(trees_1)} дерево")
    print(f"Структура: {tree_to_list(trees_1[0])}")