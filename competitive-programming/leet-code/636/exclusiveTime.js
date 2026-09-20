var exclusiveTime = function(n, logs) {
    const sums = new Array(n).fill(0);
    const stack = [];
    let prevTime;
    logs.forEach(log => {
        const details = log.split(':');
        const id = parseInt(details[0]);
        const point = details[1];
        const time = parseInt(details[2]);
        if (point === 'start') {
            if (stack.length > 0) {
			    let prevFn = stack[stack.length - 1];
                sums[prevFn] += (time - prevTime);      
            }
            stack.push(id);
            prevTime = time;
        } else {
            const last = stack.pop();
            sums[last] += (time - prevTime + 1);
            prevTime = time + 1;
        }
    });
    return sums;
};