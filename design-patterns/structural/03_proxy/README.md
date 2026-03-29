# Proxy (Заместитель)

## Что это

Паттерн который предоставляет объект-заместитель, контролирующий
доступ к реальному объекту.

**Главная идея:** клиент думает что работает с реальным объектом,
но на самом деле общается с прокси — который может добавить
кеширование, логирование, проверку прав или ленивую инициализацию.

## Когда использовать

- Нужно кешировать результаты дорогих операций
- Нужна проверка прав доступа перед выполнением
- Нужно логировать все обращения к объекту
- Объект тяжёлый — хотите создавать его только когда нужен

## Структура

```
Subject (интерфейс)
  └── request()

RealSubject
  └── request() — реальная логика

Proxy
  ├── realSubject  ← ссылка на реальный объект
  └── request()    — контроль доступа + вызов realSubject
```

## Базовый пример

```ts
// Общий интерфейс — клиент работает через него
interface DataService {
  getData(id: string): Promise<string>;
}

// Реальный объект — делает тяжёлую работу
class RealDataService implements DataService {
  async getData(id: string): Promise<string> {
    console.log(`Запрос к БД: ${id}`);
    // имитация долгого запроса
    await new Promise(r => setTimeout(r, 1000));
    return `Данные для ${id}`;
  }
}

// Прокси — добавляет кеширование, клиент не знает об этом
class CachedDataService implements DataService {
  private cache = new Map<string, string>();

  constructor(private service: RealDataService) {}

  async getData(id: string): Promise<string> {
    if (this.cache.has(id)) {
      console.log(`Из кеша: ${id}`);
      return this.cache.get(id)!;
    }

    const data = await this.service.getData(id);
    this.cache.set(id, data);
    return data;
  }
}

// Использование — клиент работает с DataService, не знает про кеш
const service: DataService = new CachedDataService(new RealDataService());

await service.getData('user_1'); // Запрос к БД: user_1
await service.getData('user_1'); // Из кеша: user_1
await service.getData('user_2'); // Запрос к БД: user_2
```

## Реальный пример — контроль доступа

```ts
interface AdminPanel {
  getUsers(): Promise<User[]>;
  deleteUser(id: string): Promise<void>;
  updateSettings(settings: Settings): Promise<void>;
}

class RealAdminPanel implements AdminPanel {
  async getUsers() { /* ... */ return []; }
  async deleteUser(id: string) { /* ... */ }
  async updateSettings(settings: Settings) { /* ... */ }
}

// Прокси — проверяет права перед каждым действием
class AdminPanelProxy implements AdminPanel {
  constructor(
    private panel: RealAdminPanel,
    private currentUser: { role: string }
  ) {}

  async getUsers() {
    if (this.currentUser.role !== 'admin') {
      throw new Error('Нет доступа');
    }
    return this.panel.getUsers();
  }

  async deleteUser(id: string) {
    if (this.currentUser.role !== 'superadmin') {
      throw new Error('Только superadmin может удалять пользователей');
    }
    return this.panel.deleteUser(id);
  }

  async updateSettings(settings: Settings) {
    if (this.currentUser.role !== 'admin') {
      throw new Error('Нет доступа');
    }
    return this.panel.updateSettings(settings);
  }
}

// Использование
const panel: AdminPanel = new AdminPanelProxy(
  new RealAdminPanel(),
  { role: 'admin' }
);

await panel.getUsers();    // ок
await panel.deleteUser('1'); // ошибка — нужен superadmin
```

## Пример — логирующий прокси

```ts
// Универсальный прокси через Proxy API (встроен в JS)
function createLoggingProxy<T extends object>(target: T): T {
  return new Proxy(target, {
    get(obj, prop) {
      const value = obj[prop as keyof T];

      if (typeof value === 'function') {
        return (...args: any[]) => {
          console.log(`Вызов: ${String(prop)}`, args);
          const result = (value as Function).apply(obj, args);
          console.log(`Результат: ${String(prop)}`, result);
          return result;
        };
      }

      return value;
    }
  });
}

// Использование — оборачиваем любой объект
const service = createLoggingProxy(new RealDataService());
await service.getData('user_1');
// Вызов: getData ['user_1']
// Результат: getData 'Данные для user_1'
```

## Пример — ленивая инициализация

```ts
// Тяжёлый объект — не хотим создавать до первого использования
class HeavyReport {
  constructor() {
    console.log('Загрузка отчёта... (долго)');
    // тяжёлая инициализация
  }

  generate() { return 'Отчёт готов'; }
}

// Прокси создаёт реальный объект только при первом вызове
class LazyReportProxy {
  private report: HeavyReport | null = null;

  generate() {
    if (!this.report) {
      this.report = new HeavyReport(); // создаём только здесь
    }
    return this.report.generate();
  }
}

const report = new LazyReportProxy(); // HeavyReport ещё не создан
// ... много кода ...
report.generate(); // только теперь создаётся HeavyReport
```

## Плюсы и минусы

| ✅ Плюсы                                  | ❌ Минусы                                  |
| ----------------------------------------- | ------------------------------------------ |
| Контроль доступа без изменения объекта    | Дополнительный уровень косвенности         |
| Кеширование прозрачно для клиента         | Может усложнить отладку                    |
| Ленивая инициализация тяжёлых объектов    | Ответ может задержаться из-за прокси       |
| Логирование без изменения бизнес-логики   | Нужно поддерживать тот же интерфейс        |

## Proxy vs Decorator vs Adapter

```ts
// Decorator — добавляет новое поведение
class MilkDecorator extends CoffeeDecorator {
  cost() { return this.coffee.cost() + 30; } // расширяет
}

// Proxy — контролирует доступ, интерфейс не меняется
class CachedService implements DataService {
  getData(id: string) {
    // тот же интерфейс, но с кешем внутри
    return this.cache.get(id) ?? this.real.getData(id);
  }
}

// Adapter — меняет интерфейс под нужный
class LoggerAdapter implements Logger {
  log(msg: string) {
    this.external.writeInfo(msg, new Date()); // переводит вызов
  }
}
```

| | Decorator | Proxy | Adapter |
|---|---|---|---|
| Цель | Добавить поведение | Контролировать доступ | Изменить интерфейс |
| Интерфейс | Тот же | Тот же | Другой |
| Знает о реальном объекте | Да | Да | Да |

## Где встречается в реальном коде

- **JavaScript Proxy API** — встроенный механизм языка
- **Axios** — интерцепторы как прокси над запросами
- **React Query / SWR** — кеширующий прокси над fetch
- **TypeORM** — lazy relations через прокси
- **NestJS Guards** — прокси для контроля доступа к роутам
- **nginx** — reverse proxy перед сервером

## Связь с другими паттернами

- **Decorator** — похожа структура, но Decorator добавляет
  поведение, Proxy контролирует доступ к объекту
- **Adapter** — Adapter меняет интерфейс, Proxy оставляет
  тот же интерфейс что у реального объекта
- **Facade** — Facade упрощает интерфейс системы,
  Proxy не упрощает — он стоит перед одним объектом
- **Cache** — кеширующий Proxy реализует паттерн Cache