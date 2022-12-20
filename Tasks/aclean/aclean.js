// Отфильтруйте анаграммы
function key(str) {
    str = str.toLowerCase();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}
function aclean(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(key(arr[i]), arr[i]);
    }
    return [...map.values()];
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean);
