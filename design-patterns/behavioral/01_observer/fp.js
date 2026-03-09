function createObservable() {
  let observers = [];

  function subscribe(observer) {
    observers.push(observer);

    return function unsubscribe() {
      observers = observers.filter((obs) => obs !== observer);
    };
  }

  function notify(data) {
    observers.forEach((observer) => observer(data));
  }

  return {
    subscribe,
    notify,
  };
}

const news = createObservable();

const unsubscribe = news.subscribe((data) => {
  console.log(`Received news: ${data}`);
});

const unsubscribe2 = news.subscribe((data) => {
  console.log(`Another observer received: ${data}`);
});

news.notify("Breaking news: Observer pattern implemented in FP!");

unsubscribe();

news.notify("More news: First observer should not receive this.");
