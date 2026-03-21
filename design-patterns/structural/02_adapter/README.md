# Adapter (Адаптер)

## Что это

Паттерн который позволяет объектам с несовместимыми интерфейсами
работать вместе, оборачивая один из них в класс-переходник.

**Главная идея:** есть два класса которые должны взаимодействовать,
но их интерфейсы не совпадают — и менять их нельзя. Адаптер
встаёт между ними и переводит вызовы одного в вызовы другого.

## Когда использовать

- Нужно использовать сторонний класс с несовместимым интерфейсом
- Интегрируете legacy-код с новой системой
- Подключаете несколько внешних сервисов через единый интерфейс
- Не можете или не хотите менять существующий код

## Структура

```
Client (клиент)
  └── работает только через Target

Target (целевой интерфейс)
  └── method()

Adaptee (адаптируемый класс)
  └── specificMethod() — несовместимый интерфейс

Adapter
  ├── наследует или реализует Target
  ├── хранит ссылку на Adaptee
  └── method() — вызывает adaptee.specificMethod()
```

## Базовый пример

```ts
// Наш интерфейс — то что ожидает приложение
interface Logger {
  log(message: string): void;
  error(message: string): void;
}

// Сторонняя библиотека — несовместимый интерфейс, менять нельзя
class ExternalLogger {
  writeInfo(msg: string, timestamp: Date) {
    console.log(`[${timestamp.toISOString()}] INFO: ${msg}`);
  }

  writeError(msg: string, timestamp: Date, code: number) {
    console.log(`[${timestamp.toISOString()}] ERROR ${code}: ${msg}`);
  }
}

// Адаптер — переводит наш интерфейс в вызовы сторонней библиотеки
class LoggerAdapter implements Logger {
  constructor(private logger: ExternalLogger) {}

  log(message: string) {
    this.logger.writeInfo(message, new Date());
  }

  error(message: string) {
    this.logger.writeError(message, new Date(), 500);
  }
}

// Использование — клиент работает только через Logger, не знает про ExternalLogger
const logger: Logger = new LoggerAdapter(new ExternalLogger());

logger.log('Пользователь вошёл');   // [2024-...] INFO: Пользователь вошёл
logger.error('Ошибка соединения');  // [2024-...] ERROR 500: Ошибка соединения
```

## Реальный пример — платёжные системы

```ts
// Единый интерфейс для всех платёжных систем
interface PaymentProvider {
  charge(amount: number, currency: string): Promise<string>;
  refund(transactionId: string): Promise<void>;
}

// Stripe — свой интерфейс
class StripeSDK {
  async createCharge(params: { amount: number; currency: string; source: string }) {
    // ... stripe logic
    return { id: 'ch_stripe_123' };
  }
  async createRefund(chargeId: string) { /* ... */ }
}

// PayPal — другой интерфейс
class PayPalSDK {
  async makePayment(sum: number, curr: string) {
    // ... paypal logic
    return { paymentId: 'pp_456' };
  }
  async cancelPayment(paymentId: string) { /* ... */ }
}

// Адаптер для Stripe
class StripeAdapter implements PaymentProvider {
  constructor(private stripe: StripeSDK) {}

  async charge(amount: number, currency: string) {
    const result = await this.stripe.createCharge({
      amount,
      currency,
      source: 'tok_default',
    });
    return result.id;
  }

  async refund(transactionId: string) {
    await this.stripe.createRefund(transactionId);
  }
}

// Адаптер для PayPal
class PayPalAdapter implements PaymentProvider {
  constructor(private paypal: PayPalSDK) {}

  async charge(amount: number, currency: string) {
    const result = await this.paypal.makePayment(amount, currency);
    return result.paymentId;
  }

  async refund(transactionId: string) {
    await this.paypal.cancelPayment(transactionId);
  }
}

// Клиент работает с любым провайдером через единый интерфейс
class OrderService {
  constructor(private payment: PaymentProvider) {}

  async checkout(amount: number) {
    const id = await this.payment.charge(amount, 'RUB');
    console.log(`Оплачено, транзакция: ${id}`);
  }
}

// Легко переключать провайдера — OrderService не меняется
const orderService = new OrderService(
  new StripeAdapter(new StripeSDK())
);

// Переключились на PayPal — одна строка
const orderService2 = new OrderService(
  new PayPalAdapter(new PayPalSDK())
);
```

## Пример — адаптер для legacy-кода

```ts
// Старый код который нельзя трогать
class LegacyUserService {
  getUserById(id: number): { first_name: string; last_name: string; e_mail: string } {
    // ... старая логика
    return { first_name: 'Иван', last_name: 'Иванов', e_mail: 'ivan@mail.ru' };
  }
}

// Новый интерфейс приложения
interface UserService {
  getUser(id: string): { name: string; email: string };
}

// Адаптер переводит старый формат в новый
class LegacyUserAdapter implements UserService {
  constructor(private legacy: LegacyUserService) {}

  getUser(id: string) {
    const user = this.legacy.getUserById(Number(id));
    return {
      name: `${user.first_name} ${user.last_name}`,
      email: user.e_mail,
    };
  }
}

const userService: UserService = new LegacyUserAdapter(new LegacyUserService());
userService.getUser('42'); // { name: 'Иван Иванов', email: 'ivan@mail.ru' }
```

## Плюсы и минусы

| ✅ Плюсы                                  | ❌ Минусы                                     |
| ----------------------------------------- | --------------------------------------------- |
| Интегрирует несовместимый код без изменений | Растёт количество классов                    |
| Изолирует клиента от деталей реализации   | Иногда проще переписать Adaptee               |
| Легко менять провайдеры через один интерфейс | Двойной вызов — небольшой overhead          |
| Следует принципу единственной ответственности | Скрывает реальный интерфейс — труднее дебажить |

## Важно — не путать с Facade

```ts
// Adapter — переводит один интерфейс в другой (1 к 1)
class LoggerAdapter implements Logger {
  log(msg: string) { this.external.writeInfo(msg, new Date()); }
}

// Facade — упрощает сложную систему (много к 1)
class NotificationFacade {
  send(msg: string) {
    this.emailService.send(msg);   // ─┐
    this.smsService.send(msg);     //  ├── скрывает несколько систем
    this.pushService.send(msg);    // ─┘
  }
}
```

Adapter решает проблему **несовместимости**, Facade решает проблему **сложности**.

## Где встречается в реальном коде

- **TypeORM / Prisma** — адаптеры для разных БД (PostgreSQL, MySQL, SQLite)
- **Axios** — адаптер над XMLHttpRequest и Node.js http
- **passport.js** — каждая стратегия (Google, GitHub) — адаптер
- **React Testing Library** — адаптер над различными test runners
- **Winston / Pino** — транспорты логгера как адаптеры

## Связь с другими паттернами

- **Decorator** — похожа структура, но цель другая:
  Decorator добавляет поведение, Adapter меняет интерфейс
- **Facade** — Facade упрощает интерфейс системы,
  Adapter приводит один интерфейс к другому
- **Proxy** — тоже оборачивает объект, но не меняет интерфейс —
  только контролирует доступ к нему
- **Factory Method** — часто используется вместе: фабрика
  создаёт нужный адаптер в зависимости от конфигурации