function searchInsert(nums, target) {
    var lo = 0, hi = nums.length;
    while (lo < hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (target > nums[mid]) {
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    return lo;
}
;
console.log(searchInsert([1, 23, 22, 32, 5, 19], 32));
