var countNodes = function (root) {
    if (!root) return 0;

    const getDepth = (node) => {
        let depth = 0;
        while (node) {
            node = node.left;
            depth++;
        }
        return depth;
    };

    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    if (leftDepth === rightDepth) {
        return (1 << leftDepth) + countNodes(root.right);
    } else {
        return (1 << rightDepth) + countNodes(root.left);
    }
};