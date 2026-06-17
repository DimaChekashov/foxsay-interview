var findFrequentTreeSum = function (root) {
    let map = new Map()
    let max = 1
    function dfsPostOrder(root) {
        if (root == null) return 0
        let LeftSubTree = dfsPostOrder(root.left)
        let RightSubTree = dfsPostOrder(root.right)
        let val = root.val + LeftSubTree + RightSubTree
        if (map.has(val)) {
            let count = map.get(val)
            map.set(val, ++count)
            max = max > count ? max : count
        } else {
            map.set(val, 1)
        }
        return val
    }
    dfsPostOrder(root)

    let result = []
    for (let [key, val] of map) if (val == max) result.push(key)


    return result
};