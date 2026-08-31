var findNthDigit = function (n) {
    let i = 1, count = 9, start = 1;

    while (n > i * count) {
        n -= i * count;
        i++;
        count *= 10;
        start *= 10;
    }

    const number = start + Math.floor((n - 1) / i);
    return parseInt(number.toString()[(n - 1) % i]);
};