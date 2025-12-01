var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let secondVal = target - nums[i];

        if (map.has(secondVal)) {
            return [map.get(secondVal), i];
        } else {
            map.set(nums[i], i);
        }
    }
};