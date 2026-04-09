var rob = function(root) {

    function dfs(node) {
        if (!node) return [0, 0];

        const [leftRob, leftNot] = dfs(node.left);
        const [rightRob, rightNot] = dfs(node.right);

        const robThis = node.val + leftNot + rightNot;
        const skipThis = Math.max(leftRob, leftNot) + Math.max(rightRob, rightNot);

        return [robThis, skipThis];
    }

    const [robRoot, skipRoot] = dfs(root);
    
    return Math.max(robRoot, skipRoot);   
};