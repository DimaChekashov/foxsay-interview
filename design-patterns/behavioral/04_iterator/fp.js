function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function take(iter, n) {
  const result = [];
  for (const value of iter) {
    if (result.length >= n) break;
    result.push(value);
  }
  return result;
}

console.log(take(fibonacci(), 10));


// Iterator в JavaScript — встроен в язык
// Всё что реализует Symbol.iterator работает с:
// for...of
// for (const item of collection) { }

// spread
// const arr = [...collection];

// деструктуризация
// const [first, second, ...rest] = collection;

// Array.from
// const arr2 = Array.from(collection);

// Promise.all / Promise.race
// await Promise.all(collection);

// Встроенные итерируемые: Array, Map, Set, String, NodeList
// for (const [key, value] of map) { }
// for (const char of 'hello') { }