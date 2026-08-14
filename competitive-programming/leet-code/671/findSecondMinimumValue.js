var findSecondMinimumValue = function(root) {
    if (!root.left) return -1;

    const nodesQueue = [root];
    let secondMin = Infinity;
    const minVal = root.val;

    while (nodesQueue.length > 0) {
        const currentNode = nodesQueue.shift();

        if (currentNode.left) {
            nodesQueue.push(currentNode.left, currentNode.right);

            if (currentNode.left.val > minVal) {
                secondMin = Math.min(secondMin, currentNode.left.val);
            }

            if (currentNode.right.val > minVal) {
                secondMin = Math.min(secondMin, currentNode.right.val);
            }
        }
    }

    return secondMin === Infinity ? -1 : secondMin;
};