var pathSum = function (root, targetSum) {
  const res = [];

  const dfs = (node, curSum, path) => {
    if (!node) return;
    curSum += node.val;
    path.push(node.val);

    if (!node.left && !node.right && curSum === targetSum) {
      res.push([...path]);
    }

    dfs(node.left, curSum, path);
    dfs(node.right, curSum, path);
    path.pop(); // backtrack
  };

  dfs(root, 0, []);
  return res;
};
