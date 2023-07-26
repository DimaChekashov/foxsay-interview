function quadratic(array) {
    let result = Array(array.length).fill(undefined);
    let left = 0, right = array.length - 1, curIndex = array.length - 1;

    while(left <= right) {
        let first = array[left] * array[left];
        let last = array[right] * array[right];

        if(last > first) {
            result[curIndex--] = last;
            right--;
            if (curIndex > 0) {
                result[curIndex--] = first;
                left++;
            }
        } else {
            result[curIndex--] = first;
            left++;
            if (curIndex > 0) {
                result[curIndex--] = last;
                right--;
            }
        }
    }

    return result;
}

console.log(quadratic([-3, 2]));
console.log(quadratic([-3, 2, 4]));
console.log(quadratic([-10, -3, 2, 4, 10, 51]));