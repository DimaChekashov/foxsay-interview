var canPartitionKSubsets = function (nums, k) {
    const totalSum = nums.reduce((sum, val) => sum + val, 0);
    if (totalSum % k) return false;
    const target = totalSum / k;
    const visit = new Array(nums.length).fill(false);
    nums.sort((a, b) => b - a);

    function backtrack(idx, k, sum) {
        if (k === 0) return true;
        if (sum === target) return backtrack(0, k - 1, 0);

        for (let i = idx; i < nums.length; i++) {
            if (visit[i] || (sum + nums[i]) > target) continue;
            visit[i] = true
            if (backtrack(i + 1, k, sum + nums[i])) return true;
            visit[i] = false;
        }
        return false;
    }
    return backtrack(0, k, 0);
};