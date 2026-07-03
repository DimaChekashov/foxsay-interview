var findTilt = function (root) {
  let totalTilt = 0;

  function dfs(node) {
    if (!node) return 0;
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    totalTilt += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + node.val;
  }

  dfs(root);
  return totalTilt;
};