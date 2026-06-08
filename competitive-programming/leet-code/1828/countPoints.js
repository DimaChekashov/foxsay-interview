const countPoints = function (points, queries) {
    let result = [];

    for (let [x, y, radius] of queries) {
        let count = 0;
        for (let [a, b] of points) {
            count += (x - a) * (x - a) + (y - b) * (y - b) <= radius * radius ? 1 : 0;
        }
        result.push(count)
    }
    return result;
}