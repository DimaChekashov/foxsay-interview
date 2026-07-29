class Solution {
    constructor(radius, x_center, y_center) {
        this.radius = radius;
        this.xc = x_center;
        this.yc = y_center;
    }

    randPoint() {
        while (true) {
            const x = Math.random() * 2 * this.radius - this.radius;
            const y = Math.random() * 2 * this.radius - this.radius;
            if (x * x + y * y <= this.radius * this.radius) {
                return [this.xc + x, this.yc + y];
            }
        }
    }
}