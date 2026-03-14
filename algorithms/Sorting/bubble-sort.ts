const array = [3, 4, 29, 12, 5, 34, 29, 11];

const bubbleSort = (arr: number[]): number[] => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {

            if(arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
            }

        }
    }

    return arr;
}

console.log(bubbleSort(array));