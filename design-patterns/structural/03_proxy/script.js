class RealDataService {
  async getData(id) {
    console.log(`Запрос к БД: ${id}`);
    await new Promise((r) => setTimeout(r, 1000));
    return `Данные для ${id}`;
  }
}

class CachedDataService {
  cache = new Map();

  constructor(service) {
    this.service = service;
  }

  async getData(id) {
    if (this.cache.has(id)) {
      console.log(`Из кеша: ${id}`);
      return this.cache.get(id);
    }

    const data = await this.service.getData(id);
    this.cache.set(id, data);
    return data;
  }
}

const service = new CachedDataService(new RealDataService());

await service.getData("user_1");
await service.getData("user_1");
await service.getData("user_2");
