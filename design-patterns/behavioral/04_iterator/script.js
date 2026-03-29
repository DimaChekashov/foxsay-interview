class Range {
  constructor(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    const step = this.step;

    return {
      next() {
        if (current <= end) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { varue: undefined, done: true };
      },
    };
  }
}

const range = new Range(0, 10, 2);

for (const num of range) {
  console.log(num);
}

console.log([...range]);
