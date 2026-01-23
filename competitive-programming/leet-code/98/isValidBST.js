var isValidBST = function (root) {
  function valid(node, minimum, maximum) {
    if (!node) return true;

    if (!(node.val > minimum && node.val < maximum)) return false;

    return (
      valid(node.left, minimum, node.val) &&
      valid(node.right, node.val, maximum)
    );
  }

  return valid(root, -Infinity, Infinity);
};
