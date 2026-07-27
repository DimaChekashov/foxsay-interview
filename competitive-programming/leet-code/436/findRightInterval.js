var findRightInterval = function(intervals) {
    const n = intervals.length;
    let indexedIntervals = intervals.map((a, i) => [...a, i]).sort((a, b) => a[0] - b[0]);

    let results = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        let targetEnd = indexedIntervals[i][1];
        let originalIdx = indexedIntervals[i][2];
        
        let l = 0;
        let r = n - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (indexedIntervals[mid][0] >= targetEnd) {
                results[originalIdx] = indexedIntervals[mid][2];
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }

    return results;
};