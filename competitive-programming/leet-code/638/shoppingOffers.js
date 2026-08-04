var shoppingOffers = function(price, special, needs) {
    const n = price.length;
    const memo = new Map();

    const filter = special.filter(sp => {
        let total = 0;
        for (let i = 0; i < n; i++) {
            total += sp[i] * price[i];
        }
        return total > sp[n];
    });

    const dfs = (cur) => {
        const key = cur.join(',');
        if (memo.has(key)) return memo.get(key);

        let best = 0;
        for (let i = 0; i < n; i++) best += cur[i] * price[i];

        for (const sp of filter) {
            const next = [];
            let valid = true;
            for (let i = 0; i < n; i++) {
                if (sp[i] > cur[i]) {
                    valid = false;
                    break;
                }
                next.push(cur[i] - sp[i]);
            }
            if (valid) {
                best = Math.min(best, dfs(next) + sp[n]);
            }
        }

        memo.set(key, best);
        return best;
    };

    return dfs(needs);
};