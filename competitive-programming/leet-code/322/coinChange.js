
var coinChange = function (coins, amount) {
    const memo = {};

    const solve = (rem) => {
        if (rem < 0) return -1;
        if (rem === 0) return 0;
        if (memo[rem] !== undefined) return memo[rem];

        let minCount = Infinity;

        for (const coin of coins) {
            const res = solve(rem - coin);
            if (res !== -1) {
                minCount = Math.min(minCount, 1 + res);
            }
        }

        memo[rem] = minCount === Infinity ? -1 : minCount;
        return memo[rem];
    };

    return solve(amount);
};