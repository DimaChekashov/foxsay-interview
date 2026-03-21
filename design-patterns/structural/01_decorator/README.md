# Decorator (Декоратор)

## Что это

Паттерн который позволяет динамически добавлять объекту новое
поведение, оборачивая его в объекты-декораторы.

**Главная идея:** вместо наследования — композиция. Оборачиваем
объект в другой объект, который добавляет своё поведение и
делегирует вызов внутреннему объекту.

## Когда использовать

- Нужно добавить поведение объекту не меняя его класс
- Комбинаций поведения много и они динамические
- Наследование невозможно или создаёт взрыв подклассов
- Middleware, логирование, кеширование, валидация

## Структура

```
Component (интерфейс)
  └── operation()

ConcreteComponent
  └── operation() — базовое поведение

BaseDecorator
  ├── component  ← ссылка на обёрнутый объект
  └── operation() — делегирует вызов внутрь

ConcreteDecorator
  └── operation() — своё поведение + вызов super
```

## Базовый пример

```ts
// Общий интерфейс — и объект, и декораторы реализуют его
interface Coffee {
  cost(): number;
  description(): string;
}

// Базовый компонент
class Espresso implements Coffee {
  cost() {
    return 100;
  }
  description() {
    return "Эспрессо";
  }
}

// Базовый декоратор — хранит ссылку на обёрнутый объект
class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  cost() {
    return this.coffee.cost();
  }
  description() {
    return this.coffee.description();
  }
}

// Конкретные декораторы
class Milk extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 30;
  }
  description() {
    return this.coffee.description() + ", молоко";
  }
}

class Caramel extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 50;
  }
  description() {
    return this.coffee.description() + ", карамель";
  }
}

class Sugar extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 10;
  }
  description() {
    return this.coffee.description() + ", сахар";
  }
}

// Оборачиваем как матрёшку
let coffee: Coffee = new Espresso();
coffee = new Milk(coffee);
coffee = new Caramel(coffee);
coffee = new Sugar(coffee);

console.log(coffee.description()); // Эспрессо, молоко, карамель, сахар
console.log(coffee.cost()); // 190
```

## Реальный пример — middleware

```ts
// Каждый middleware — это декоратор над обработчиком запроса
const app = express();

app.use(cors()); // добавляет CORS-заголовки
app.use(morgan("dev")); // добавляет логирование
app.use(express.json()); // добавляет парсинг JSON
app.use(authMiddleware); // добавляет проверку токена

app.get("/orders", getOrders); // базовый обработчик
```

## Пример — декораторы для функций

```ts
// Универсальные декораторы-обёртки над любой функцией

// Добавляет логирование
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: any[]) => {
    console.log(`Вызов: ${fn.name}`, args);
    const result = fn(...args);
    console.log(`Результат: ${fn.name}`, result);
    return result;
  }) as T;
}

// Добавляет кеширование
function withCache<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, any>();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Добавляет замер времени
function withTiming<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: any[]) => {
    const start = performance.now();
    const result = fn(...args);
    console.log(`${fn.name}: ${(performance.now() - start).toFixed(2)}ms`);
    return result;
  }) as T;
}

// Оборачиваем как матрёшку — порядок важен
const compute = (n: number) => n * n;
const decorated = withLogging(withCache(withTiming(compute)));

decorated(5); // замеряет → кеширует → логирует
decorated(5); // логирует → достаёт из кеша (без замера)
```

## Пример — декораторы классов (NestJS стиль)

```ts
// В NestJS декораторы — это буквально паттерн Decorator
@Controller("orders")
@UseGuards(AuthGuard) // добавляет проверку авторизации
@UseInterceptors(LoggingInterceptor) // добавляет логирование
export class OrdersController {
  @Get()
  @Roles("admin") // добавляет проверку роли
  @CacheResult(60) // добавляет кеширование на 60 сек
  getOrders() {
    return this.ordersService.findAll();
  }
}
```

## Плюсы и минусы

| ✅ Плюсы                                 | ❌ Минусы                                  |
| ---------------------------------------- | ------------------------------------------ |
| Добавляет поведение без изменения класса | Много мелких объектов-обёрток              |
| Комбинации поведения без взрыва классов  | Порядок декораторов имеет значение         |
| Следует принципу открытости/закрытости   | Сложно убрать конкретный декоратор из цепи |
| Декораторы можно переиспользовать        | Труднее отлаживать глубокую цепочку        |

## Важно — порядок имеет значение

```ts
// Порядок оборачивания влияет на результат

// Сначала кеш, потом лог — логируется каждый вызов
const v1 = withLogging(withCache(fn));
// v1(5) → лог → проверить кеш → (если нет) вычислить

// Сначала лог, потом кеш — логируется только первый вызов
const v2 = withCache(withLogging(fn));
// v2(5) → проверить кеш → (если нет) лог → вычислить
```

## Decorator vs наследование

```ts
// ❌ Наследование — взрыв классов при росте комбинаций
class CoffeeWithMilk extends Espresso { ... }
class CoffeeWithSugar extends Espresso { ... }
class CoffeeWithMilkAndSugar extends CoffeeWithMilk { ... }
class CoffeeWithMilkAndCaramel extends CoffeeWithMilk { ... }
// И так далее — экспоненциальный рост

// ✅ Decorator — любые комбинации без новых классов
let coffee = new Espresso();
coffee = new Milk(coffee);
coffee = new Sugar(coffee);
// Нужна карамель? Просто добавь ещё один wrap
```

## Где встречается в реальном коде

- **Express / Koa** — middleware цепочки
- **NestJS** — `@UseGuards`, `@UseInterceptors`, `@CacheTTL`
- **RxJS** — операторы `.pipe(map(), filter(), debounce())`
- **React** — Higher-Order Components (HOC)
- **Node.js streams** — `Transform` потоки оборачивают друг друга
- **TypeScript** — декораторы классов и методов

## Связь с другими паттернами

- **Strategy** — Strategy меняет алгоритм целиком,
  Decorator добавляет поведение поверх существующего
- **Composite** — похожая структура, но Composite работает
  с деревьями объектов, Decorator с одним объектом
- **Proxy** — похож по структуре, но цель другая:
  Proxy контролирует доступ, Decorator расширяет поведение
- **Observer** — можно комбинировать: декорировать
  EventEmitter дополнительным поведением
