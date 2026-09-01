class Solution {
    constructor(nums) {
        this.map = new Map();
        nums.forEach((val, i) => {
            if (!this.map.has(val)) this.map.set(val, []);
            this.map.get(val).push(i);
        });
    }

    pick(target) {
        const indices = this.map.get(target);
        const randIndex = Math.floor(Math.random() * indices.length);
        return indices[randIndex];
    }
}