"use strict";
 
var A = function (nums) {
    nums = nums.split(" ");

    for(let i = 0; i < nums.length; i++) {
        nums[i] = +nums[i];
    }

    const memo = {};

    function helper(index, sum) {
        if (sum === 0) {
            return true;
        }

        if (index === nums.length || sum < 0) {
            return false;
        }

        const memoKey = index + '-' + sum;

        if (memo.hasOwnProperty(memoKey)) {
            return memo[memoKey];
        }

        const include = helper(index + 1, sum - nums[index]);
        const exclude = helper(index + 1, sum);

        memo[memoKey] = include || exclude;
        return memo[memoKey];
    }

    const sumTotal = nums.reduce((acc, num) => acc + num, 0);
    return sumTotal % 2 === 0 && helper(0, sumTotal / 2);
};
 
(function() {
    const t = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.
 
    for(let i = 0; i < t; i++) {
        readline(); // array length
        print(A(readline()));
    }
})()