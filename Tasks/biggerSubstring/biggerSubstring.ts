// Time complexity: O(n) 
// Space complexity: O(1)
function maxSubstring(s: string): string {
    let biggerIndex: number = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[biggerIndex] < s[i]) {
            biggerIndex = i;
        }
    }

    return s.substr(biggerIndex);
}

// Time complexity: O(n) 
// Space complexity: O(1)
const maxSubstringReduce = (s: string): string => s.substr(
    [...s].reduce((acc, cur, index) => (s[acc] < cur ? index : acc), 0)
);


console.log("Default: " + maxSubstring("banana"));

console.log("With reduce: " + maxSubstringReduce("banana"));
