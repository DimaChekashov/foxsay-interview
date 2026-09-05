var maxDepth = function (root) {
    if (root === null) return 0;

    let maxHeight = 0;
    for (const child of root.children) {
        maxHeight = Math.max(maxHeight, maxDepth(child));
    }

    return 1 + maxHeight;
};