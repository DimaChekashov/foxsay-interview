function canMeasureWater(x, y, target) {
    if (target > x + y) return false;

    const stack = [[0, 0]];
    const visited = new Set();

    while (stack.length) {
        const [a, b] = stack.pop();
        const key = `${a},${b}`;

        if (a + b === target) return true;
        if (visited.has(key)) continue;
        visited.add(key);

        stack.push([x, b]);
        stack.push([a, y]);
        stack.push([0, b]);
        stack.push([a, 0]);

        const pourXtoY = Math.min(a, y - b);
        stack.push([a - pourXtoY, b + pourXtoY]);

        const pourYtoX = Math.min(b, x - a);
        stack.push([a + pourYtoX, b - pourYtoX]);
    }

    return false;
}