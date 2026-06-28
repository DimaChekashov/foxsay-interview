var findTargetSumWays = function (nums, target) {
  let counter = { 0: 1 };

  for (let n of nums) {
    let temp = {};

    for (let total in counter) {
      total = parseInt(total);
      temp[total + n] = (temp[total + n] || 0) + counter[total];
      temp[total - n] = (temp[total - n] || 0) + counter[total];
    }
    counter = temp;
  }

  return counter[target] || 0;
};
