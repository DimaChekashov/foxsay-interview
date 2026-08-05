var canIWin = function (maxn, total) {
    if (total === 0) return true;

    let sumn = (maxn * (maxn + 1)) / 2;
    if (sumn < total) return false;

    let masks = new Array(1 << maxn);
    let bitMaskmaxn = (1 << maxn) - 1;

    function solve(currentMask, total) {
        if (currentMask <= 0) return false;
        if (total <= 0) return false;
        if (masks[currentMask] !== undefined) return masks[currentMask];

        for (let n = 1, bitMask = 1; n <= maxn && bitMask <= currentMask; ++n, bitMask = bitMask << 1) {
            let nNotTaken = currentMask & bitMask;
            if (nNotTaken) {
                let currentMaskWithoutN = currentMask ^ bitMask;
                let totalWithoutN = total - n;
                if (!solve(currentMaskWithoutN, totalWithoutN)) {
                    return (masks[currentMask] = true);
                }
            }
        }
        return (masks[currentMask] = false);
    }

    return solve(bitMaskmaxn, total);
};