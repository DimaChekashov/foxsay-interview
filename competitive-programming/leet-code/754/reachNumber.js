var reachNumber = function (target) {
    target = Math.abs(target);
    let step = 0;
    let sum = 0;
    while (sum < target) {
        step++;
        sum += step;
    }
    while ((sum - target) % 2 != 0) {
        step++;
        sum += step;
    }
    return step;
};