var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let isLeftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      const index = isLeftToRight ? i : levelSize - 1 - i;
      currentLevel[index] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
    isLeftToRight = !isLeftToRight;
  }

  return result;
};
