# Iterator (Итератор)

## Что это

Паттерн который предоставляет способ последовательного обхода
элементов коллекции, не раскрывая её внутреннего устройства.

**Главная идея:** клиент не знает как устроена коллекция — массив
это, дерево, граф или связный список. Он просто вызывает next()
и получает следующий элемент.

## Когда использовать

- Нужно обходить коллекцию не зная её внутренней структуры
- Хотите несколько способов обхода одной коллекции
- Нужно ленивое вычисление — элементы создаются по запросу
- Работаете с бесконечными последовательностями

## Структура

```
Iterator (интерфейс)
  ├── next(): { value, done }
  └── [Symbol.iterator](): this

ConcreteIterator
  ├── current  ← текущая позиция
  └── next()   — возвращает следующий элемент

IterableCollection
  └── [Symbol.iterator](): Iterator
```

## Базовый пример

```ts
// Своя коллекция с итератором
class Range {
  constructor(
    private start: number,
    private end: number,
    private step: number = 1
  ) {}

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
        return { value: undefined, done: true };
      }
    };
  }
}

// Работает со всеми встроенными механизмами JS
const range = new Range(1, 10, 2);

for (const n of range) {
  console.log(n); // 1, 3, 5, 7, 9
}

console.log([...range]); // [1, 3, 5, 7, 9]

const [first, second] = range;
console.log(first, second); // 1 3
```

## Реальный пример — обход дерева

```ts
interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

class Tree<T> {
  constructor(private root: TreeNode<T>) {}

  // Обход в глубину (DFS)
  *[Symbol.iterator](): Generator<T> {
    yield* this.traverse(this.root);
  }

  private *traverse(node: TreeNode<T>): Generator<T> {
    yield node.value;
    for (const child of node.children) {
      yield* this.traverse(child);
    }
  }

  // Обход в ширину (BFS) — другой способ обхода той же коллекции
  *bfs(): Generator<T> {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift()!;
      yield node.value;
      queue.push(...node.children);
    }
  }
}

// Использование
const tree = new Tree({
  value: 1,
  children: [
    { value: 2, children: [{ value: 4, children: [] }] },
    { value: 3, children: [{ value: 5, children: [] }] },
  ],
});

console.log([...tree]);        // DFS: [1, 2, 4, 3, 5]
console.log([...tree.bfs()]);  // BFS: [1, 2, 3, 4, 5]
```

## Пример — ленивые генераторы

```ts
// Бесконечная последовательность — элементы создаются по запросу
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Берём только первые 10 — остальные не вычисляются
function take<T>(iter: Iterable<T>, n: number): T[] {
  const result = [];
  for (const value of iter) {
    result.push(value);
    if (result.length >= n) break;
  }
  return result;
}

console.log(take(fibonacci(), 10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## Пример — пагинация как итератор

```ts
// Ленивая загрузка страниц из API
async function* paginate<T>(url: string): AsyncGenerator<T> {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();

    for (const item of data.items) {
      yield item; // отдаём по одному
    }

    hasMore = data.hasNextPage;
    page++;
  }
}

// Использование — не загружаем всё сразу
for await (const user of paginate<User>('/api/users')) {
  console.log(user.name);
  // следующая страница загружается только когда нужна
}
```

## Iterator в JavaScript — встроен в язык

```ts
// Всё что реализует Symbol.iterator работает с:

// for...of
for (const item of collection) { }

// spread
const arr = [...collection];

// деструктуризация
const [first, second, ...rest] = collection;

// Array.from
const arr2 = Array.from(collection);

// Promise.all / Promise.race
await Promise.all(collection);

// Встроенные итерируемые: Array, Map, Set, String, NodeList
for (const [key, value] of map) { }
for (const char of 'hello') { }
```

## Плюсы и минусы

| ✅ Плюсы                                  | ❌ Минусы                                    |
| ----------------------------------------- | -------------------------------------------- |
| Клиент не зависит от структуры коллекции  | Избыточен для простых массивов               |
| Несколько способов обхода одной коллекции | Менее эффективен чем прямой доступ по индексу |
| Ленивые вычисления и бесконечные списки   | Нельзя пройти назад без доп. реализации      |
| Встроен в JavaScript через Symbol.iterator | Генераторы сложнее читать новичкам           |

## Важно — итератор одноразовый

```ts
// ❌ Итератор исчерпывается после первого прохода
function* gen() { yield 1; yield 2; yield 3; }
const iter = gen();

console.log([...iter]); // [1, 2, 3]
console.log([...iter]); // [] — уже пустой!

// ✅ Iterable можно обходить сколько угодно раз
class NumberRange {
  constructor(private from: number, private to: number) {}

  [Symbol.iterator]() { // каждый раз новый итератор
    let current = this.from;
    const to = this.to;
    return {
      next() {
        return current <= to
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
}

const range = new NumberRange(1, 3);
console.log([...range]); // [1, 2, 3]
console.log([...range]); // [1, 2, 3] — работает снова
```

## Где встречается в реальном коде

- **JavaScript** — `for...of`, spread, деструктуризация — всё это Iterator
- **Array, Map, Set, String** — все встроенные коллекции итерируемы
- **RxJS** — Observable как асинхронный итератор
- **Node.js Streams** — `for await...of stream`
- **Prisma / TypeORM** — курсор для обхода больших таблиц
- **Lodash** — `_.each`, `_.map` работают с любыми коллекциями

## Связь с другими паттернами

- **Composite** — Iterator часто используется для обхода
  деревьев которые строит Composite
- **Factory Method** — коллекция может использовать фабричный
  метод для создания подходящего итератора
- **Memento** — можно сохранять состояние итератора
  чтобы вернуться к нужной позиции позже
- **Generator** — в JavaScript генераторы это удобный
  синтаксис для создания итераторов