function withLogging(fn) {
  return (...args) => {
    console.log(`Вызов: ${fn.name}`, args);
    const result = fn(...args);
    console.log(`Результат: ${fn.name}`, result);
    return result;
  };
}

function withTiming(fn) {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);
    console.log(`${fn.name}: ${(performance.now() - start).toFixed(2)}ms`);
    return result;
  };
}

const compute = (n) => n * n;
const decorated = withLogging(compute);

decorated(5);

const decoratedTwo = withLogging(withTiming(compute));

decoratedTwo(10);
