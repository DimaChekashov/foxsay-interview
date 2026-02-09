var permuteUnique = function (nums) {
  let res = [];
  dfs(nums.sort(), res, new Set());
  return res;
};

const dfs = (nums, res, visited) => {
  if (nums.length === visited.size) {
    let arr = [];
    for (let idx of visited) {
      arr.push(nums[idx]);
    }
    res.push(arr);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && !visited.has(i - 1)) continue;
    if (visited.has(i)) continue;
    visited.add(i);
    dfs(nums, res, visited);
    visited.delete(i);
  }
};
