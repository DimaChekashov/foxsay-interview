var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    if (indexDiff <= 0 || valueDiff < 0) return false;

    const width = valueDiff + 1;
    const buckets = new Map();

    const bucketId = (x) => {
        return Math.floor(x / width);
    };

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        const id = bucketId(x);

        if (buckets.has(id)) return true;

        if (buckets.has(id - 1) && Math.abs(x - buckets.get(id - 1)) <= valueDiff) {
            return true;
        }
        if (buckets.has(id + 1) && Math.abs(x - buckets.get(id + 1)) <= valueDiff) {
            return true;
        }

        buckets.set(id, x);

        if (i >= indexDiff) {
            const old = nums[i - indexDiff];
            buckets.delete(bucketId(old));
        }
    }

    return false;
};