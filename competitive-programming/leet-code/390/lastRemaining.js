var lastRemaining = function (n) {
  function helper(x, step, count, left) {
    if (count < 2) return x;
    let increment = left || count % 2 === 1 ? step : 0;
    return helper(x + increment, step * 2, Math.floor(count / 2), !left);
  }
  return helper(1, 1, n, true);
};
