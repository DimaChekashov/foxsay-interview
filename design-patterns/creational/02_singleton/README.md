# Singleton (Одиночка)

## Что это

Паттерн который гарантирует что класс имеет **только один экземпляр**
во всём приложении и предоставляет глобальную точку доступа к нему.

**Главная идея:** сколько раз не вызывай `new` —
всегда получаешь один и тот же объект.

## Когда использовать

- Подключение к базе данных (один пул соединений)
- Логгер (один на всё приложение)
- Конфигурация (один объект настроек)
- Кэш (одно хранилище в памяти)
- Подключение к Redis

## Структура

```
Singleton
  ├── #instance (приватное статическое поле)
  ├── constructor() — проверяет #instance
  └── getInstance() — возвращает единственный экземпляр
```

## Пример — подключение к БД

```js
class Database {
  static #instance = null;

  constructor() {
    if (Database.#instance) {
      return Database.#instance; // возвращаем существующий
    }
    this.connection = this.#connect();
    Database.#instance = this; // сохраняем первый
  }

  #connect() {
    console.log("Подключение к БД...");
    return { status: "connected" };
  }

  query(sql) {
    console.log(`Запрос: ${sql}`);
  }
}

// Проверка
const db1 = new Database(); // Подключение к БД...
const db2 = new Database(); // тихо, соединение уже есть

console.log(db1 === db2); // true — один и тот же объект
```

## Пример — Логгер

```js
class Logger {
  static #instance = null;
  #logs = [];

  static getInstance() {
    if (!Logger.#instance) {
      Logger.#instance = new Logger();
    }
    return Logger.#instance;
  }

  info(msg) {
    const entry = { level: "INFO", msg, time: new Date() };
    this.#logs.push(entry);
    console.log(`[INFO] ${msg}`);
  }

  error(msg) {
    const entry = { level: "ERROR", msg, time: new Date() };
    this.#logs.push(entry);
    console.error(`[ERROR] ${msg}`);
  }

  getLogs() {
    return this.#logs;
  }
}

// В любом месте приложения — один и тот же логгер
const logger = Logger.getInstance();
logger.info("Сервер запущен");
logger.error("Что-то пошло не так");
```

## Пример — Конфигурация

```js
class Config {
  static #instance = null;

  constructor() {
    if (Config.#instance) return Config.#instance;
    this.settings = {
      port: process.env.PORT || 3000,
      dbUrl: process.env.DATABASE_URL,
      jwtSecret: process.env.JWT_SECRET,
    };
    Config.#instance = this;
  }

  get(key) {
    return this.settings[key];
  }
}

const config = new Config();
console.log(config.get("port")); // 3000
```

## Плюсы и минусы

| ✅ Плюсы                             | ❌ Минусы                                          |
| ------------------------------------ | -------------------------------------------------- |
| Один экземпляр — нет дублирования    | Глобальное состояние (сложнее тестировать)         |
| Экономит ресурсы (один коннект к БД) | Скрытые зависимости между модулями                 |
| Простой доступ из любого места       | Нарушает Single Responsibility при злоупотреблении |

## Антипаттерн — когда НЕ использовать

❌ Не делай Singleton из всего подряд — это превращается
в глобальные переменные которые сложно отслеживать.

Хорошие кандидаты: DB, Logger, Config, Cache, Redis
Плохие кандидаты: User, Product, Order — у них много экземпляров

## В реальных проектах (Node.js)

```js
// db.js — один раз создаём, везде импортируем
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;
export const db = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// Использование в любом файле
import { db } from "./db.js";
await db.user.findMany();
```

## Связь с другими паттернами

- **Factory** — часто фабрика возвращает Singleton
- **Dependency Injection** — альтернатива Singleton,
  более тестируемая
- **Observer** — EventEmitter часто реализуется как Singleton
