var isSubtree = function (root, subRoot) {
    const serialize = (node) => {
        if (!node) return ',#';
        return `,${node.val}` + serialize(node.left) + serialize(node.right);
    };

    const rootStr = serialize(root);
    const subStr = serialize(subRoot);
    return rootStr.includes(subStr);
};