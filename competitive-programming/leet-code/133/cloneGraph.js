var cloneGraph = function (node) {
  let mapping = new Map();

  function dfs(curr) {
    if (!curr) return null;
    if (mapping.has(curr)) return mapping.get(curr);

    let clone = new Node(curr.val);
    mapping.set(curr, clone);

    for (let neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};