/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
function binary_search(list, item) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var gueess = list[mid];
        if (gueess === item) {
            return mid;
        }
        else if (gueess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
console.log("Example 1:", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log("Example 2:", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log("Example 3:", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16));
console.log("Example 4:", binary_search(["A", "B", "C", "D", "E", "F", "G"], "E"));
