"use strict";
 
// 1 2 3 1 2 3

// 3
// 1 1 1


// Time complexity: O(n^2) Space complexity: O(1)
// var A = function (n, a) {
//     if (n < 2) return 0;

//     let count = 0;

//     for (let i = 0; i < n; i++) {
//         if (a[i] === 0) continue;

//         for (let j = i + 1; j < n; j++) {
//             if (a[j] === 0) continue;

//             if (a[i] === a[j]) {
//                 count++;
//                 a[j] = a[i] = 0;
//                 break;
//             }
//         }
//     }

//     return count;
// };


// Time complexity: O(n log n) Space complexity: O(1)
// var B = function (n, arr) {
//     if (n < 2) return 0;

//     let count = 0;

//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < n; i++) {
//         if (arr[i] === arr[i + 1]) {
//             count++;
//             i++;
//         }
//     }

//     return count;
// }

// Time complexity: O(n) Space complexity: O(1)
// var C = function (n, arr) {
    // if (n < 2) return 0;

    // const fraquencyArr = new Array(20).fill(0);

    // for (const el of arr) fraquencyArr[el - 1]++;

    // return fraquencyArr.reduce((acc, cur) => acc + Math.trunc(cur / 2), 0);
// }
 
// (function() {
//     const t = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.

//     for(let i = 0; i < t; i++) {
//         print(A(+readline(), readline().split(' ')))
//     }
// })()

const { CodeforcesTester } = require('../../codeforces-tester');

// test input/output data
const tester = new CodeforcesTester()
    .inputData(`
5
1
1
2
2 2
2
1 2
4
1 2 3 1
6
1 2 3 1 2 3

`)
.outputData(`
0
1
0
1
3

`)

// execute script: node ./solution.js
// solution to copy and send below (for JS IMPORTANT to add at start of script: "use strict";)
"use strict";

class CodeforcesIO {
    /**
     * @param solve a callback function which provides functionality to work with input/output data
     * ```js
     * new CodeforcesIO((readline, print) => {
     *  const echo = readline()
     *  print(echo)
     * })
     * ```
     */
    constructor(solve) {
        this.lines = []
        this.lineNum = 0
        this.result = []

        if (typeof tester !== 'undefined') { // test input/output data are set
            solve(tester.readline.bind(tester), tester.print.bind(tester));
            return
        }

        if (typeof process !== 'undefined') { // for Node.js 12.16.3
            require('readline').createInterface({
                input: process.stdin
            }).on('line', (line) => {
                this.lines.push(line);
            }).on('close', () => {
                solve(this.readline.bind(this), this.print.bind(this));
                process.stdout.write(this.result.join('\n'));
            })
            return;
        }

        solve(readline, print); // readline, print are defined globally in JavaScript V8 4.8.0
    }

    readline() {
        return this.lines[this.lineNum++]
    }

    print(res) {
        this.result.push(res);
    }
}

const solution = (n, arr) => {
    if (n < 2) return 0;

    const fraquencyArr = new Array(20).fill(0);

    for (const el of arr) fraquencyArr[el - 1]++;

    return fraquencyArr.reduce((acc, cur) => acc + Math.trunc(cur / 2), 0);
};

new CodeforcesIO((readline, print) => {
    const t = readline()

    for (let i = 0; i < t; i++) {
        print(solution(+readline(), readline().split(' ')))
    }
})