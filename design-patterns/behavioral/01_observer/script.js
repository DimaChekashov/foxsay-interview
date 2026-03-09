class EventEmitter {
  #listeners = {};

  on(event, fn) {
    if (!this.#listeners[event]) {
      this.#listeners[event] = [];
    }
    this.#listeners[event].push(fn);
    return this;
  }

  off(event, fn) {
    this.#listeners[event] = this.#listeners[event]?.filter((l) => l !== fn);
    return this;
  }

  emit(event, data) {
    this.#listeners[event]?.forEach((fn) => fn(data));
    return this;
  }
}

const emitter = new EventEmitter();

emitter.on("login", (user) => console.log(`Привет, ${user.name}!`));
emitter.on("login", (user) => console.log(`Лог входа: ${user.email}`));

emitter.emit("login", { name: "Иван", email: "ivan@mail.ru" });
