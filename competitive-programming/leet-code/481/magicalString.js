var magicalString = function (n) {
    if (n === 0) return 0;
    const s = [1, 2, 2];
    let i = 2;
    while (s.length < n) {
        const next = 3 - s[s.length - 1];
        for (let j = 0; j < s[i] && s.length < n; j++) {
            s.push(next);
        }
        i++;
    }
    return s.slice(0, n).filter(x => x === 1).length;
};