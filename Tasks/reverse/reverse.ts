function reverse(x: number): number {
    const max_int_neg: number = -Math.pow(2, 31);
    const max_int_pos: number = Math.pow(2, 31) - 1;

    const isNegative: boolean = x < 0;
    let rev: number = 0;
    let t: number = Math.abs(x);

    while (Math.floor(t / 10) !== 0) {
        rev += t % 10;
        rev *= 10;
        t = Math.floor(t / 10);
    }
    rev += t;

    if (isNegative) {
        return -rev < max_int_neg ? 0 : -rev;
    }

    return rev > max_int_pos ? 0 : rev;
};

console.log(reverse(198765543));