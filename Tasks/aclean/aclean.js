var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Отфильтруйте анаграммы
function key(str) {
    str = str.toLowerCase();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}
function aclean(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        map.set(key(arr[i]), arr[i]);
    }
    return __spreadArray([], map.values(), true);
}
var arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean);
