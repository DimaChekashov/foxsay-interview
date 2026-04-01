function countSmaller(nums) {
  const li = [];
  const sorted = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const index = insert(sorted, nums[i]);
    li.push(index);
    sorted.splice(index, 0, nums[i]);
  }

  return li.reverse();
}

function insert(arr, num) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}