function searchInsert(nums: number[], target: number): number {
    let lo: number = 0, hi: number = nums.length;
    while(lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        if (target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};

console.log(searchInsert([1, 23, 22, 32, 5, 19], 32));