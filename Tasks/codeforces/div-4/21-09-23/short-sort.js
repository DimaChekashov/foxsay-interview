"use strict";
 
var A = function (str) {
    const RIGHT_POS = ["a", "b", "c"];
    let count = 0;
    str = str.split("");

    for (let i = 0; i < RIGHT_POS.length; i++) {
        if (str[i] !== RIGHT_POS[i]) {
            str[str.indexOf(RIGHT_POS[i])] = str[i];
            str[i] = RIGHT_POS[i];
            count++;
        }
    }

    return count < 2 ? "YES" : "NO";
};
 
(function() {
    const t = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.
 
    for(let i = 0; i < t; i++) {
        const input_line_args = readline().split(' '); // string length
        print(A(input_line_args[0]))
    }
})()