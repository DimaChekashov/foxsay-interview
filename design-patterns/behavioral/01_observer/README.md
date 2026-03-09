# Observer (Наблюдатель)

## Что это

Паттерн который позволяет одному объекту (Subject) уведомлять
других объектов (Observers) об изменениях своего состояния.

**Главная идея:** объекты подписываются на события и реагируют
на них — не зная друг о друге напрямую.

## Когда использовать

- Один объект должен уведомлять многих
- Компоненты не должны знать друг о друге
- Нужна реакция на события в реальном времени
- Логирование, аналитика, уведомления

## Структура

```
Subject (издатель)
  ├── subscribers[]
  ├── subscribe(observer)
  ├── unsubscribe(observer)
  └── notify(data)

Observer (подписчик)
  └── update(data)
```

## Базовый пример

```js
class EventEmitter {
  #listeners = {};

  // Подписаться
  on(event, fn) {
    if (!this.#listeners[event]) {
      this.#listeners[event] = [];
    }
    this.#listeners[event].push(fn);
    return this; // для цепочки вызовов
  }

  // Отписаться
  off(event, fn) {
    this.#listeners[event] = this.#listeners[event]?.filter((l) => l !== fn);
    return this;
  }

  // Уведомить всех подписчиков
  emit(event, data) {
    this.#listeners[event]?.forEach((fn) => fn(data));
    return this;
  }
}

// Использование
const emitter = new EventEmitter();

emitter.on("login", (user) => console.log(`Привет, ${user.name}!`));
emitter.on("login", (user) => console.log(`Лог входа: ${user.email}`));
emitter.on("login", (user) => sendWelcomeEmail(user));

emitter.emit("login", { name: "Иван", email: "ivan@mail.ru" });
// Привет, Иван!
// Лог входа: ivan@mail.ru
// (отправка email...)
```

## Реальный пример — интернет-магазин

```js
class OrderService extends EventEmitter {
  async createOrder(data) {
    // Создаём заказ в БД
    const order = await db.orders.create(data);

    // Уведомляем всех подписчиков — не знаем кто слушает
    this.emit("order:created", order);

    return order;
  }

  async cancelOrder(id) {
    const order = await db.orders.update(id, { status: "cancelled" });
    this.emit("order:cancelled", order);
    return order;
  }
}

// Подписчики — каждый делает своё дело
const orderService = new OrderService();

// Отправить email
orderService.on("order:created", async (order) => {
  await emailService.send(order.email, "Заказ принят!");
});

// Списать со склада
orderService.on("order:created", async (order) => {
  await warehouseService.reserve(order.items);
});

// Записать аналитику
orderService.on("order:created", async (order) => {
  await analytics.track("purchase", order);
});

// Вернуть на склад при отмене
orderService.on("order:cancelled", async (order) => {
  await warehouseService.release(order.items);
});
```

## Пример — реактивное состояние

```js
class Store {
  #state;
  #listeners = {};

  constructor(initialState) {
    this.#state = initialState;
  }

  getState() {
    return { ...this.#state }; // возвращаем копию
  }

  setState(newState) {
    const prevState = this.#state;
    this.#state = { ...this.#state, ...newState };

    // Уведомляем только если реально изменилось
    Object.keys(newState).forEach((key) => {
      if (prevState[key] !== this.#state[key]) {
        this.#emit(key, this.#state[key]);
      }
    });
  }

  watch(key, fn) {
    if (!this.#listeners[key]) this.#listeners[key] = [];
    this.#listeners[key].push(fn);
  }

  #emit(key, value) {
    this.#listeners[key]?.forEach((fn) => fn(value));
  }
}

// Использование
const store = new Store({ count: 0, user: null });

store.watch("count", (val) => console.log(`Count: ${val}`));
store.watch("user", (val) => console.log(`User: ${val?.name}`));

store.setState({ count: 1 }); // Count: 1
store.setState({ count: 2 }); // Count: 2
store.setState({ user: { name: "Иван" } }); // User: Иван
```

## Once — подписка один раз

```js
class EventEmitter {
  // ... предыдущий код ...

  once(event, fn) {
    const wrapper = (data) => {
      fn(data);
      this.off(event, wrapper); // автоматически отписывается
    };
    this.on(event, wrapper);
    return this;
  }
}

emitter.once("app:ready", () => {
  console.log("Приложение запущено — больше не слушаем");
});
```

## Async Observer — асинхронные подписчики

```js
class AsyncEventEmitter {
  #listeners = {};

  on(event, fn) {
    if (!this.#listeners[event]) this.#listeners[event] = [];
    this.#listeners[event].push(fn);
    return this;
  }

  // Ждём всех подписчиков
  async emit(event, data) {
    const fns = this.#listeners[event] ?? [];
    await Promise.all(fns.map((fn) => fn(data)));
  }

  // Запускаем параллельно, не ждём
  emitAsync(event, data) {
    const fns = this.#listeners[event] ?? [];
    fns.forEach((fn) => fn(data).catch(console.error));
  }
}
```

## Плюсы и минусы

| ✅ Плюсы                              | ❌ Минусы                          |
| ------------------------------------- | ---------------------------------- |
| Слабая связанность между модулями     | Порядок вызова не гарантирован     |
| Легко добавлять новых подписчиков     | Утечка памяти если не отписываться |
| Один источник события — много реакций | Сложно отлаживать цепочки событий  |
| Основа реактивного программирования   | Неочевидный поток данных           |

## Важно — утечка памяти

```js
// ❌ Забыл отписаться — утечка памяти
component.on("resize", handler);

// ✅ Всегда отписывайся когда объект уничтожается
component.on("resize", handler);
// ... позже ...
component.off("resize", handler);
```

## Где встречается в реальном коде

- **Node.js** — встроенный `EventEmitter` (основа всего Node)
- **React** — хук `useEffect` подписка/отписка
- **Redux** — `store.subscribe()`
- **RxJS** — Observable/Subscription
- **DOM** — `addEventListener / removeEventListener`
- **Socket.io** — `socket.on('message', handler)`

## Связь с другими паттернами

- **Singleton** — EventEmitter часто Singleton
- **Mediator** — похож, но посредник знает всех участников
- **Strategy** — Observer решает КТО реагирует,
  Strategy решает КАК реагирует
