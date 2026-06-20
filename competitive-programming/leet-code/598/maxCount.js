var maxCount = function (m, n, ops) {
    if (ops.length === 0) return m * n;
    let minA = m, minB = n;
    for (let [a, b] of ops) {
        minA = Math.min(minA, a);
        minB = Math.min(minB, b);
    }
    return minA * minB;
};