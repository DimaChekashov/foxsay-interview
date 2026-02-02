var sortedArrayToBST = function (nums) {
  function convert(left, right) {
    if (left > right) {
      return null;
    }

    const mid = Math.floor((left + right) / 2);

    const node = new TreeNode(nums[mid]);

    node.left = convert(left, mid - 1);
    node.right = convert(mid + 1, right);

    return node;
  }

  return convert(0, nums.length - 1);
};
