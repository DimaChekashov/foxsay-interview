class Database {
  static #instance = null;

  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connection = this.#connect();
    Database.#instance = this;
  }

  #connect() {
    console.log("Подключение к БД...");
    return { status: "connected" };
  }

  query(sql) {
    console.log(`Запрос: ${sql}`);
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);
