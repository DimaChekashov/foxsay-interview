var wiggleSort = function (nums) {
    const v = [...nums];
    v.sort((a, b) => a - b);

    let n = nums.length;
    let mid = Math.floor((n + 1) / 2);

    let left = mid - 1;
    let right = n - 1;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0)
            nums[i] = v[left--];
        else
            nums[i] = v[right--];
    }
};