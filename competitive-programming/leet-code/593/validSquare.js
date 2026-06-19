var validSquare = function (p1, p2, p3, p4) {
    const dist = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    const pts = [p1, p2, p3, p4];
    const ds = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            ds.push(dist(pts[i], pts[j]));
        }
    }
    ds.sort((a, b) => a - b);
    return ds[0] > 0 &&
        ds[0] === ds[1] &&
        ds[1] === ds[2] &&
        ds[2] === ds[3] &&
        ds[4] === ds[5] &&
        2 * ds[0] === ds[4];
};