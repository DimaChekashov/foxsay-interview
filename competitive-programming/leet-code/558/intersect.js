var intersect = function (quadTree1, quadTree2) {
    if (quadTree1.isLeaf) {
        return quadTree1.val ? quadTree1 : quadTree2;
    }
    if (quadTree2.isLeaf) {
        return quadTree2.val ? quadTree2 : quadTree1;
    }
    let nodes = [
        intersect(quadTree1.topLeft, quadTree2.topLeft),
        intersect(quadTree1.topRight, quadTree2.topRight),
        intersect(quadTree1.bottomLeft, quadTree2.bottomLeft),
        intersect(quadTree1.bottomRight, quadTree2.bottomRight),
    ]
    let isSame = nodes.every(({ isLeaf, val }) => isLeaf && val);
    let [topLeft, topRight, bottomLeft, bottomRight] = nodes;

    if (isSame) return topLeft;
    return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
};