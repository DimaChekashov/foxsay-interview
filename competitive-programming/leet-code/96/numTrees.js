var numTrees = function (n) {
  let uniqTree = Array(n + 1).fill(1);

  for (let nodes = 2; nodes <= n; nodes++) {
    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      total += uniqTree[root - 1] * uniqTree[nodes - root];
    }
    uniqTree[nodes] = total;
  }

  return uniqTree[n];
};
