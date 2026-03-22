# Command (Команда)

## Что это

Паттерн который превращает запрос в самостоятельный объект,
содержащий всю информацию о вызове.

**Главная идея:** вместо прямого вызова метода — упаковать вызов
в объект. Этот объект можно передать, сохранить в истории,
поставить в очередь или отменить.

## Когда использовать

- Нужна отмена/повтор операций (undo/redo)
- Нужна очередь или отложенное выполнение задач
- Хотите логировать все действия пользователя
- Нужно параметризовать объекты выполняемыми действиями

## Структура

```
Invoker (инициатор)
  ├── history[]
  ├── execute(command)
  └── undo()

Command (интерфейс)
  ├── execute()
  └── undo()

ConcreteCommand
  ├── receiver  ← ссылка на исполнителя
  ├── execute() — вызывает нужный метод receiver
  └── undo()    — отменяет своё действие

Receiver (получатель)
  └── реальная бизнес-логика
```

## Базовый пример

```ts
// Интерфейс команды
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver — содержит реальную логику
class TextEditor {
  private text = '';

  insertText(text: string) {
    this.text += text;
    console.log(`Текст: "${this.text}"`);
  }

  deleteText(length: number) {
    this.text = this.text.slice(0, -length);
    console.log(`Текст: "${this.text}"`);
  }

  getText() { return this.text; }
}

// ConcreteCommand — знает как выполнить и отменить себя
class InsertCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string
  ) {}

  execute() { this.editor.insertText(this.text); }
  undo()    { this.editor.deleteText(this.text.length); }
}

// Invoker — хранит историю, управляет командами
class CommandHistory {
  private history: Command[] = [];

  execute(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    command?.undo();
  }
}

// Использование
const editor  = new TextEditor();
const history = new CommandHistory();

history.execute(new InsertCommand(editor, 'Привет'));  // Текст: "Привет"
history.execute(new InsertCommand(editor, ', мир'));   // Текст: "Привет, мир"
history.undo();                                        // Текст: "Привет"
history.undo();                                        // Текст: ""
```

## Реальный пример — очередь задач

```ts
class SendEmailCommand implements Command {
  constructor(private to: string, private body: string) {}

  execute() {
    console.log(`Отправка email на ${this.to}: ${this.body}`);
    // await emailService.send(this.to, this.body)
  }

  undo() {
    console.log(`Отмена письма на ${this.to}`);
    // await emailService.cancel(...)
  }
}

class ResizeImageCommand implements Command {
  constructor(private imageId: string, private width: number) {}

  execute() {
    console.log(`Ресайз изображения ${this.imageId} до ${this.width}px`);
    // await imageService.resize(this.imageId, this.width)
  }

  undo() {
    console.log(`Откат ресайза ${this.imageId}`);
    // await imageService.restore(this.imageId)
  }
}

// Invoker — очередь задач
class JobQueue {
  private queue: Command[] = [];

  add(command: Command) {
    this.queue.push(command);
  }

  async flush() {
    while (this.queue.length) {
      await this.queue.shift()!.execute();
    }
  }
}

// Накапливаем команды
const queue = new JobQueue();
queue.add(new SendEmailCommand('ivan@mail.ru', 'Добро пожаловать!'));
queue.add(new ResizeImageCommand('photo_42', 800));

// Выполняем все разом — например по крону или после транзакции
await queue.flush();
```

## Пример — транзакции с откатом

```ts
class TransactionManager {
  private executed: Command[] = [];

  async run(commands: Command[]) {
    for (const command of commands) {
      try {
        await command.execute();
        this.executed.push(command);
      } catch (error) {
        console.error('Ошибка, откатываем...', error);
        await this.rollback();
        throw error;
      }
    }
  }

  private async rollback() {
    // Откатываем в обратном порядке
    while (this.executed.length) {
      await this.executed.pop()!.undo();
    }
  }
}

// Использование
const tx = new TransactionManager();

await tx.run([
  new CreateOrderCommand(orderData),      // 1. создаём заказ
  new ReserveStockCommand(items),         // 2. резервируем склад
  new ChargePaymentCommand(card, amount), // 3. списываем оплату
]);
// Если шаг 3 упал — автоматически откатятся шаги 2 и 1
```

## MacroCommand — команда из команд

```ts
// Несколько команд как одна — тоже реализует Command
class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  execute() {
    this.commands.forEach(cmd => cmd.execute());
  }

  undo() {
    // Откатываем в обратном порядке
    [...this.commands].reverse().forEach(cmd => cmd.undo());
  }
}

// Использование
const publishPost = new MacroCommand([
  new SaveDraftCommand(post),
  new NotifySubscribersCommand(post),
  new UpdateSitemapCommand(post),
]);

history.execute(publishPost); // все три разом
history.undo();               // откат всех трёх
```

## Плюсы и минусы

| ✅ Плюсы                                | ❌ Минусы                               |
| --------------------------------------- | --------------------------------------- |
| Undo/redo из коробки                    | Много классов для простых операций      |
| Легко ставить задачи в очередь          | Команда должна хранить состояние для undo |
| Можно логировать все действия           | Сложнее отлаживать цепочки команд       |
| Invoker не зависит от Receiver          | Undo бывает невозможен (отправка email) |

## Важно — не все команды можно отменить

```ts
// ❌ Некоторые действия необратимы
class SendEmailCommand implements Command {
  execute() { emailService.send(...); }
  undo() {
    // Письмо уже ушло — отменить нельзя
    // Можно только отправить новое с извинением
    throw new Error('Отправку email нельзя отменить');
  }
}

// ✅ Для необратимых действий — откладывайте выполнение
class SendEmailCommand implements Command {
  private sent = false;

  execute() {
    // Не отправляем сразу — ставим в очередь с задержкой
    scheduler.delay(() => {
      this.sent = true;
      emailService.send(...);
    }, 5000); // 5 секунд на отмену
  }

  undo() {
    if (!this.sent) scheduler.cancel();
    else throw new Error('Письмо уже отправлено');
  }
}
```

## Где встречается в реальном коде

- **Любой редактор** — Ctrl+Z / Ctrl+Y это паттерн Command
- **Bull / BullMQ** — задачи в очереди как команды
- **Redux** — каждый action это команда, reducer — receiver
- **CQRS** — Command Query Responsibility Segregation
- **Git** — каждый коммит можно считать командой с revert
- **Транзакции в БД** — begin / commit / rollback

## Связь с другими паттернами

- **Strategy** — Strategy меняет алгоритм, Command оборачивает
  вызов в объект для отложенного выполнения или отмены
- **Observer** — можно комбинировать: Observer решает кто
  реагирует, Command решает что именно выполняется
- **Memento** — часто используется вместе с Command для undo:
  Command описывает действие, Memento сохраняет состояние до него
- **Chain of Responsibility** — команды можно передавать
  по цепочке обработчиков