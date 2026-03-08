var maxProduct = function (arr) {
  let n = arr.length;

  let pre = 1;
  let suff = 1;
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;

    pre *= arr[i];
    suff *= arr[n - i - 1];

    ans = Math.max(ans, pre, suff);
  }
  return ans;
};
