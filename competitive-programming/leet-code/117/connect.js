var connect = function (root) {
  if (root === null) return root;

  const level = 0;
  const queue = [[root, level]];

  while (queue.length) {
    const [current, level] = queue.shift();

    if (queue.length) {
      const [next, nextLevel] = queue[0];
      if (level === nextLevel) {
        current.next = next;
      }
    }
    if (current.left) queue.push([current.left, level + 1]);
    if (current.right) queue.push([current.right, level + 1]);
  }

  return root;
};