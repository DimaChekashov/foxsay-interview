var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Time complexity: O(n) 
// Space complexity: O(1)
function maxSubstring(s) {
    var biggerIndex = 0;
    for (var i = 1; i < s.length; i++) {
        if (s[biggerIndex] < s[i]) {
            biggerIndex = i;
        }
    }
    return s.substr(biggerIndex);
}
// Time complexity: O(n) 
// Space complexity: O(1)
var maxSubstringReduce = function (s) { return s.substr(__spreadArray([], s, true).reduce(function (acc, cur, index) { return (s[acc] < cur ? index : acc); }, 0)); };
console.log("Default: " + maxSubstring("banana"));
console.log("With reduce: " + maxSubstringReduce("banana"));
