class BubbleSort {
  sort(data) {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i - 1; j++)
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    return arr;
  }
}

class QuickSort {
  sort(data) {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter((x) => x < pivot);
    const mid = data.filter((x) => x === pivot);
    const right = data.filter((x) => x > pivot);
    return [...this.sort(left), ...mid, ...this.sort(right)];
  }
}

class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([4, 1, 2, 7, 4]));

sorter.setStrategy(new QuickSort());
console.log(sorter.sort([4, 1, 2, 7, 4]));
