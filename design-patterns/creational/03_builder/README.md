# Builder (Строитель)

## Что это

Паттерн который позволяет создавать сложные объекты пошагово,
разделяя конструирование объекта от его представления.

**Главная идея:** вместо конструктора с огромным количеством
параметров — цепочка методов где указываешь только то что нужно.
Остальное заполняется значениями по умолчанию.

## Когда использовать

- Объект имеет много параметров, большинство из которых опциональны
- Нужно создавать разные представления одного объекта
- Пошаговое конструирование с валидацией на каждом шаге
- Хотите избежать телескопических конструкторов

## Структура

```
Builder (интерфейс)
  ├── setA()
  ├── setB()
  └── build(): Product

ConcreteBuilder
  ├── result  ← собираемый объект
  ├── setA()  — устанавливает параметр, возвращает this
  ├── setB()  — устанавливает параметр, возвращает this
  └── build() — возвращает готовый объект

Director (опционально)
  └── construct(builder) — задаёт порядок шагов
```

## Базовый пример

```ts
// Без Builder — телескопический конструктор
const user = new User(
  'Иван', 'Иванов', 'ivan@mail.ru',
  25, 'admin', true, null, [], '...'  // что есть что?
);

// С Builder — читаемо и гибко
const user = new UserBuilder()
  .setName('Иван', 'Иванов')
  .setEmail('ivan@mail.ru')
  .setAge(25)
  .setRole('admin')
  .build();
```

## Реальный пример — построитель запросов

```ts
class QueryBuilder {
  private table  = '';
  private fields = ['*'];
  private conditions: string[] = [];
  private order  = '';
  private limitValue  = 0;
  private offsetValue = 0;

  select(table: string, fields = ['*']) {
    this.table  = table;
    this.fields = fields;
    return this; // возвращаем this для цепочки
  }

  where(condition: string) {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC') {
    this.order = `${field} ${direction}`;
    return this;
  }

  limit(value: number) {
    this.limitValue = value;
    return this;
  }

  offset(value: number) {
    this.offsetValue = value;
    return this;
  }

  build(): string {
    if (!this.table) throw new Error('Таблица не указана');

    let query = `SELECT ${this.fields.join(', ')} FROM ${this.table}`;

    if (this.conditions.length) {
      query += ` WHERE ${this.conditions.join(' AND ')}`;
    }
    if (this.order)       query += ` ORDER BY ${this.order}`;
    if (this.limitValue)  query += ` LIMIT ${this.limitValue}`;
    if (this.offsetValue) query += ` OFFSET ${this.offsetValue}`;

    return query;
  }
}

// Использование
const query = new QueryBuilder()
  .select('users', ['id', 'name', 'email'])
  .where('age > 18')
  .where('role = "admin"')
  .orderBy('name')
  .limit(10)
  .offset(20)
  .build();

// SELECT id, name, email FROM users
// WHERE age > 18 AND role = "admin"
// ORDER BY name ASC LIMIT 10 OFFSET 20
```

## Реальный пример — конфигурация сервера

```ts
class ServerConfig {
  constructor(
    public readonly host: string,
    public readonly port: number,
    public readonly ssl: boolean,
    public readonly timeout: number,
    public readonly maxConnections: number,
    public readonly cors: string[],
    public readonly rateLimit: number,
  ) {}
}

class ServerConfigBuilder {
  private host           = 'localhost';
  private port           = 3000;
  private ssl            = false;
  private timeout        = 5000;
  private maxConnections = 100;
  private cors: string[] = [];
  private rateLimit      = 100;

  setHost(host: string) {
    this.host = host;
    return this;
  }

  setPort(port: number) {
    if (port < 0 || port > 65535) throw new Error('Невалидный порт');
    this.port = port;
    return this;
  }

  enableSSL() {
    this.ssl  = true;
    this.port = 443;
    return this;
  }

  setTimeout(ms: number) {
    this.timeout = ms;
    return this;
  }

  allowCors(...origins: string[]) {
    this.cors = origins;
    return this;
  }

  setRateLimit(requestsPerMinute: number) {
    this.rateLimit = requestsPerMinute;
    return this;
  }

  build(): ServerConfig {
    return new ServerConfig(
      this.host,
      this.port,
      this.ssl,
      this.timeout,
      this.maxConnections,
      this.cors,
      this.rateLimit,
    );
  }
}

// Разные конфигурации для разных окружений
const devConfig = new ServerConfigBuilder()
  .setHost('localhost')
  .setPort(3000)
  .allowCors('*')
  .build();

const prodConfig = new ServerConfigBuilder()
  .setHost('api.example.com')
  .enableSSL()
  .setTimeout(3000)
  .allowCors('https://example.com')
  .setRateLimit(60)
  .build();
```

## Director — опциональный участник

```ts
// Director знает порядок шагов для типовых конфигураций
class ConfigDirector {
  constructor(private builder: ServerConfigBuilder) {}

  buildDevConfig() {
    return this.builder
      .setHost('localhost')
      .setPort(3000)
      .allowCors('*')
      .build();
  }

  buildProdConfig() {
    return this.builder
      .setHost('api.example.com')
      .enableSSL()
      .setTimeout(3000)
      .setRateLimit(60)
      .build();
  }
}

// Использование
const director = new ConfigDirector(new ServerConfigBuilder());
const config   = director.buildProdConfig();
```

## Плюсы и минусы

| ✅ Плюсы                                  | ❌ Минусы                                    |
| ----------------------------------------- | -------------------------------------------- |
| Читаемое создание сложных объектов        | Лишний код для простых объектов              |
| Валидация на каждом шаге                  | Объект не создан пока не вызван build()      |
| Одни и те же шаги — разные результаты     | Нужно помнить вызывать build() в конце       |
| Изолирует логику конструирования          | Builder привязан к конкретному классу        |

## Важно — иммутабельность результата

```ts
// ✅ build() возвращает новый объект каждый раз
// Builder можно переиспользовать
const base = new UserBuilder().setRole('user').setAge(18);

const ivan = base.setName('Иван').build();
const anna = base.setName('Анна').setAge(25).build();
// ivan и anna — разные объекты
```

## Builder vs обычный объект

```ts
// Когда Builder не нужен — просто объект с опциями
const config = createServer({
  host: 'localhost',
  port: 3000,
  cors: ['*'],
});

// Builder нужен когда:
// — есть валидация между шагами
// — порядок шагов имеет значение
// — нужен Director для типовых конфигураций
// — объект строится в разных местах кода
```

## Где встречается в реальном коде

- **Knex.js / TypeORM** — построители SQL-запросов
- **Jest** — `expect(value).not.toBeNull().toBeDefined()`
- **Axios** — цепочка `.create().defaults.headers`
- **Zod / Yup** — `z.string().min(3).max(20).email()`
- **Mongoose** — `Model.find().where().limit().sort()`
- **RxJS** — `.pipe(map(), filter(), debounce())`

## Связь с другими паттернами

- **Factory Method** — Factory создаёт объект за один шаг,
  Builder строит пошагово с промежуточными состояниями
- **Abstract Factory** — Abstract Factory создаёт семейства
  объектов, Builder фокусируется на одном сложном объекте
- **Composite** — Builder часто используется для построения
  деревьев которые описывает Composite
- **Fluent Interface** — цепочка методов (method chaining)
  это не паттерн, а техника реализации Builder