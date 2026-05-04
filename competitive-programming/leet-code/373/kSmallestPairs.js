var kSmallestPairs = function (nums1, nums2, k) {
    const queue = new MinPriorityQueue({
        compare: (a, b) => (a[0] + a[1] - b[0] - b[1])
    });
    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        queue.enqueue([nums1[i], nums2[0], 0]);
    }

    const res = [];
    while (res.length < k && queue.size()) {
        const [e1, e2, e2Idx] = queue.dequeue();
        res.push([e1, e2]);
        if (e2Idx === nums2.length - 1) continue;

        queue.enqueue([e1, nums2[e2Idx + 1], e2Idx + 1]);
    }
    return res;
};