var checkPossibility = function (nums) {
    let modCount = 0;

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        const prev = nums[i - 1];

        if (curr < prev) {
            modCount++;

            if (modCount > 1) {
                return false;
            }

            const prevprev = nums[i - 2];

            if (prevprev === undefined || prevprev <= curr) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }

    return true;
};