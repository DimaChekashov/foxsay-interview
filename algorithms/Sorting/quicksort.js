var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[0];
    var greater = [];
    var less = [];
    for (var i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            less.push(arr[i]);
        }
        else {
            greater.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quicksort(less), true), [pivot], false), quicksort(greater), true);
}
var testArray = [2, 3, 10, 32, 44, 1];
console.log(quicksort(testArray));
