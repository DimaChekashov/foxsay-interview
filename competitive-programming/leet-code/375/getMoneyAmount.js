var getMoneyAmount = function(n) {
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let len = 2; len <= n; len++) {
        for (let start = n - len + 1; start >= 1; start--) {
            const end = start + len - 1;
            dp[start][end] = Infinity;
            for (let pivot = start; pivot <= end; pivot++) {
                const costLeft = pivot > start ? dp[start][pivot - 1] : 0;
                const costRight = pivot < end ? dp[pivot + 1][end] : 0;
                dp[start][end] = Math.min(dp[start][end], pivot + Math.max(costLeft, costRight));
            }
        }
    }

    return dp[1][n];
};