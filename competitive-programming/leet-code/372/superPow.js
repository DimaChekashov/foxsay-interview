let superPow = function (a, b) {
    let bInt = BigInt(b.join("")), m = 1337, res = 1;
    a = a % m;

    while (bInt > 0) {
        if (bInt % 2n == 1) res = (res * a) % m;
        a = (a * a) % m;
        bInt = bInt >> 1n;
    }

    return res;
}