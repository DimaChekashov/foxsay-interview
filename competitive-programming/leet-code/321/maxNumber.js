var maxNumber = function (nums1, nums2, k) {
  const start = Math.max(0, k - nums2.length), end = Math.min(nums1.length, k);
  let ans = []
  for (let i = start; i <= end; i++) {
    const seq1 = maxSubseq(nums1, i), seq2 = maxSubseq(nums2, k - i);
    const curr = merge(seq1, seq2);
    if (lexGreater(curr, 0, ans, 0)) ans = curr;
  }
  return ans
};

function maxSubseq(nums, q) {
  const stack = [];
  if (q == 0) return stack;

  let allowedDrops = nums.length - q;

  for (let i = 0; i < nums.length; i++) {
    while (allowedDrops > 0 && stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      stack.pop();
      allowedDrops--;
    }
    stack.push(nums[i]);
  }
  return stack.slice(0, q);
};

function lexGreater(a, i, b, j) {
  for (; i < a.length && j < b.length; i++, j++) {
    if (a[i] > b[j]) return true;
    else if (a[i] < b[j]) return false;
  }
  return a.length - i > b.length - j;
}

function merge(a, b) {
  const res = [];
  let i = 0, j = 0;
  while (i < a.length || j < b.length) {
    if (lexGreater(a, i, b, j)) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }
  return res;
};