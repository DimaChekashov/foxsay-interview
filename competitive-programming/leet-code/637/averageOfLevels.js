var averageOfLevels = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / size);
  }

  return result;
};
