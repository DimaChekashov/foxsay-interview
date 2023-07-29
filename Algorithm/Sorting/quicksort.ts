function quicksort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let pivot = arr[0];
    let greater: any = [];
    let less: any = [];

    for(let i = 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quicksort(less), pivot, ...quicksort(greater)];
}

let testArray = [2, 3, 10, 32, 44, 1];

console.log(quicksort(testArray));