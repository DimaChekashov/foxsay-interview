var longestPalindromeSubseq = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(-1));

    function solve(l, r) {
        if (r < l) {
            return 0;
        }

        if (dp[l][r] !== -1) {
            return dp[l][r];
        }

        if (s[l] === s[r]) {
            if (l === r) {
                return dp[l][r] = 1 + solve(l + 1, r - 1);
            }
            return dp[l][r] = 2 + solve(l + 1, r - 1);
        }

        return dp[l][r] = Math.max(
            solve(l + 1, r),
            solve(l, r - 1)
        );
    }

    return solve(0, n - 1);
};