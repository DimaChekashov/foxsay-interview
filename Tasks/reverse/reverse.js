function reverse(x) {
    var max_int_neg = -Math.pow(2, 31);
    var max_int_pos = Math.pow(2, 31) - 1;
    var isNegative = x < 0;
    var rev = 0;
    var t = Math.abs(x);
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
}
;
console.log(reverse(198765543));
