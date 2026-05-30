var invertTree = function (root) {
    if (!root)
        return null;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right)
    return root;
};