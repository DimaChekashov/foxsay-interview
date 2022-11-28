function mySqrt(x) {
    var root = 0;
    while (root * root < x) {
        root++;
    }
    return root * root === x ? root : --root;
}
;
function mySqrt2(x) {
    if (x === 0)
        return 0;
    var left = 1, right = Number.MAX_VALUE;
    while (true) {
        var mid = left + (right - left) / 2;
        if (mid > x / mid) {
            right = mid - 1;
        }
        else {
            if (mid + 1 > x / (mid + 1))
                return mid;
            left = mid + 1;
        }
    }
}
;
console.log("mySqrt: " + (mySqrt(2147483647) === 46340));
console.log("mySqrt2: " + (mySqrt2(2147483647) === 46340));
