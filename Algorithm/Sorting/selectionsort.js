function selectionSort(arr) {
    var newArr = [];
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var smallestIndex = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return newArr;
}
var testArray = [2, 3, 10, 32, 44, 1];
console.log(selectionSort(testArray));
