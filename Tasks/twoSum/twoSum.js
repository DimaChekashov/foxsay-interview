function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
;
console.log(twoSum([1, 2, 3, 4, 5, 6], 10));
