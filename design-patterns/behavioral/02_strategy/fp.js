const bubbleSort = (data) => {
  const arr = [...data];
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
};

const quickSort = (data) => {
  if (data.length <= 1) return data;
  const pivot = data[Math.floor(data.length / 2)];
  const left = data.filter((x) => x < pivot);
  const mid = data.filter((x) => x === pivot);
  const right = data.filter((x) => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
};

const createSorter = (strategy) => (data) => strategy(data);

const bubbleSorter = createSorter(bubbleSort);
console.log(bubbleSorter([4, 1, 2, 7, 4]));

const quickSorter = createSorter(quickSort);
console.log(quickSorter([4, 1, 2, 7, 4]));
