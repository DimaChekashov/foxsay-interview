function selectionSort(arr) {
    let newArr: any = [];
    let length = arr.length;

    for(let i = 0; i < length; i++) {
        let smallestIndex = 0;
        
        for(let j = 0; j < arr.length; j++) {
            if(arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }

        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }

    return newArr;
}

let testArray = [2, 3, 10, 32, 44, 1];

console.log(selectionSort(testArray));