# Strategy (Стратегия)

## Что это

Паттерн который позволяет определить семейство алгоритмов,
инкапсулировать каждый из них и делать их взаимозаменяемыми.

**Главная идея:** вынести поведение (алгоритм) в отдельный объект,
чтобы менять его независимо от контекста — не зная деталей реализации.

## Когда использовать

- Нужно переключать алгоритмы в рантайме
- Есть несколько вариантов одного поведения
- Хочется избавиться от громоздких `if/else` или `switch`
- Логика оплаты, сортировки, валидации, скидок

## Структура

```
Context (контекст)
  ├── strategy
  ├── setStrategy(strategy)
  └── execute(data)

Strategy (интерфейс)
  └── execute(data)

ConcreteStrategy (реализация)
  └── execute(data) — свой алгоритм
```

## Базовый пример

```ts
// Интерфейс стратегии
interface SortStrategy {
  sort(data: number[]): number[];
}

// Конкретные стратегии
class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i - 1; j++)
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    return arr;
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter((x) => x < pivot);
    const mid = data.filter((x) => x === pivot);
    const right = data.filter((x) => x > pivot);
    return [...this.sort(left), ...mid, ...this.sort(right)];
  }
}

// Контекст — не знает КАК сортируют, только ЧТО нужно отсортировать
class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

// Использование
const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([5, 2, 8, 1])); // [1, 2, 5, 8]

sorter.setStrategy(new QuickSort()); // Меняем стратегию на лету!
console.log(sorter.sort([5, 2, 8, 1])); // [1, 2, 5, 8]
```

## Реальный пример — система оплаты

```ts
interface PaymentStrategy {
  pay(amount: number): Promise<void>;
}

class CardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  async pay(amount: number) {
    console.log(`Оплата картой ${this.cardNumber}: ${amount}₽`);
    await bankAPI.charge(this.cardNumber, amount);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  async pay(amount: number) {
    console.log(`Оплата через PayPal (${this.email}): ${amount}₽`);
    await paypalAPI.charge(this.email, amount);
  }
}

class CryptoPayment implements PaymentStrategy {
  constructor(private wallet: string) {}

  async pay(amount: number) {
    console.log(`Оплата криптой на ${this.wallet}: ${amount}₽`);
    await cryptoAPI.transfer(this.wallet, amount);
  }
}

// Контекст — корзина не знает как проходит оплата
class Checkout {
  private strategy: PaymentStrategy;

  setPaymentMethod(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  async pay(amount: number) {
    if (!this.strategy) throw new Error("Способ оплаты не выбран");
    await this.strategy.pay(amount);
  }
}

// Использование
const checkout = new Checkout();

checkout.setPaymentMethod(new CardPayment("4242 4242 4242 4242"));
await checkout.pay(1500); // Оплата картой...

checkout.setPaymentMethod(new CryptoPayment("0xABC123"));
await checkout.pay(1500); // Оплата криптой...
```

## Пример — система скидок

```ts
interface DiscountStrategy {
  apply(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(price: number) {
    return price;
  }
}

class PercentDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  apply(price: number) {
    return price * (1 - this.percent / 100);
  }
}

class FixedDiscount implements DiscountStrategy {
  constructor(private amount: number) {}
  apply(price: number) {
    return Math.max(0, price - this.amount);
  }
}

class PriceCalculator {
  constructor(private discount: DiscountStrategy = new NoDiscount()) {}

  setDiscount(discount: DiscountStrategy) {
    this.discount = discount;
  }

  calculate(price: number): number {
    return this.discount.apply(price);
  }
}

// Использование
const calc = new PriceCalculator();
console.log(calc.calculate(1000)); // 1000

calc.setDiscount(new PercentDiscount(10));
console.log(calc.calculate(1000)); // 900

calc.setDiscount(new FixedDiscount(200));
console.log(calc.calculate(1000)); // 800
```

## Функциональный вариант

В TypeScript стратегию не обязательно оборачивать в класс —
достаточно передать функцию:

```ts
type SortFn = (data: number[]) => number[];

class Sorter {
  constructor(private sortFn: SortFn) {}

  setStrategy(fn: SortFn) {
    this.sortFn = fn;
  }

  sort(data: number[]): number[] {
    return this.sortFn(data);
  }
}

const sorter = new Sorter((arr) => [...arr].sort((a, b) => a - b));
sorter.sort([5, 2, 8, 1]); // [1, 2, 5, 8]
```

## Плюсы и минусы

| ✅ Плюсы                                  | ❌ Минусы                                     |
| ----------------------------------------- | --------------------------------------------- |
| Избавляет от длинных `if/else`            | Клиент должен знать о существующих стратегиях |
| Легко добавлять новые алгоритмы           | Лишние классы если стратегий мало             |
| Алгоритмы изолированы и легко тестируются | Может быть излишним для простых случаев       |
| Можно менять поведение в рантайме         | Увеличивает количество объектов               |

## Важно — не переусложняй

```ts
// ❌ Overkill для простого случая
class AscSort implements SortStrategy { ... }
class DescSort implements SortStrategy { ... }

// ✅ Проще обойтись флагом
const sort = (arr: number[], desc = false) =>
  [...arr].sort((a, b) => desc ? b - a : a - b);
```

Если вариантов два и они не изменятся — Strategy не нужна.

## Где встречается в реальном коде

- **TypeScript / Node.js** — passport.js (стратегии аутентификации)
- **React** — разные рендер-стратегии компонентов
- **Axios / Fetch** — интерцепторы как стратегии обработки запросов
- **Lodash** — `_.sortBy` с кастомным компаратором
- **Webpack** — разные стратегии минификации и бандлинга
- **Jest** — разные стратегии трансформации файлов

## Связь с другими паттернами

- **Observer** — Observer решает КТО реагирует,
  Strategy решает КАК реагирует
- **Factory** — часто используется для создания нужной стратегии
- **Template Method** — похож, но использует наследование вместо композиции
- **State** — похож по структуре, но State сам решает когда переключаться
