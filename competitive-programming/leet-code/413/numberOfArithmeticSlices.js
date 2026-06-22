var numberOfArithmeticSlices = function (nums) {
    if (nums.length < 3) return 0;
    const diffs = [];
    for (let i = 0; i < nums.length - 1; i++) {
        diffs.push(nums[i + 1] - nums[i]);
    }

    let count = 0;
    let start = 0;
    while (start < diffs.length) {
        let end = start;
        while (end + 1 < diffs.length && diffs[end + 1] === diffs[start]) {
            end++;
        }
        const len = end - start + 1;
        if (len >= 2) count += (len * (len - 1)) / 2;
        start = end + 1;
    }

    return count;
};