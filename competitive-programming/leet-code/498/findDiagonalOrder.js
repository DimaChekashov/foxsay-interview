var findDiagonalOrder = function (mat) {
  const m = mat.length,
    n = mat[0].length;
  const map = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = i + j;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(mat[i][j]);
    }
  }

  const res = [];
  for (let k = 0; k < m + n - 1; k++) {
    const list = map.get(k);
    if (k % 2 === 0) list.reverse();
    res.push(...list);
  }
  return res;
};
