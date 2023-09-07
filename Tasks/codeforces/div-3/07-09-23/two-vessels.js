"use strict";
 
var A = function (a, b, c) {
    if (a === b) return 0;

    let count = 0;

    let bigger = a > b ? a : b;
    let lower = a < b ? a : b;

    while (bigger > lower) {
        count++;
        bigger -= c;
        lower += c;
    }

    return count.toString();
};
 
(function() {
    const t = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.
 
    for(let i = 0; i < t; i++) {
        const input_line_args = readline().split(' '); // string length
        print(A(+input_line_args[0], +input_line_args[1], +input_line_args[2]))
    }
})()