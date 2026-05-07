var canPartition = function (nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    if (total % 2 !== 0) return false;

    let target = total / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let n of nums) {
        for (let i = target; i >= n; i--) {
            if (dp[i]) continue;
            if (dp[i - n]) dp[i] = true;
            if (dp[target]) return true;
        }
    }

    return false;
};