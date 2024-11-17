"use strict";
 
var A = function (n, a) {
    if (n < 2) return 0;

    let count = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] === 0) continue;

        for (let j = i + 1; j < n; j++) {
            if (a[j] === 0) continue;

            if (a[i] === a[j]) {
                count++;
                a[j] = 0;
            }
        }
    }

    return count;
};
 
(function() {
    const t = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.

    for(let i = 0; i < t; i++) {
        print(A(+readline(), readline().split(' ')))
    }
})()