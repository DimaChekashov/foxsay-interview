const { CodeforcesTester } = require('../../codeforces-tester');

// test input/output data
const tester = new CodeforcesTester()
    .inputData(`
4
4
2 2 1 2
3
0 1 2
5
4 3 2 3 4
9
9 9 9 9 9 9 9 9 9

`)
.outputData(`
16
2
432
430467210

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

const solution = (n, a) => {
    for(let i = 0; i < n; i++) {
        a[i] = +a[i]; 
    }

    a.sort((a, b) => a - b);

    let result = a[0] + 1;

    for(let i = 1; i < n; i++) {
        result *= a[i];
    }

    return result.toString();
};

new CodeforcesIO((readline, print) => {
    const t = readline()

    for (let i = 0; i < t; i++) {
        print(solution(+readline(), readline().split(' ')))
    }
})