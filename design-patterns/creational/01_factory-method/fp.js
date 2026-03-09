function createPayment(type) {
  const map = {
    stripe: () => ({ pay: (amount) => console.log(`Stripe: ${amount}₽`) }),
    paypal: () => ({ pay: (amount) => console.log(`PayPal: ${amount}₽`) }),
    yandex: () => ({ pay: (amount) => console.log(`Yandex: ${amount}₽`) }),
  };

  const payment = map[type];
  if (!payment) throw new Error(`Неизвестный тип: ${type}`);

  return payment();
}

const payment = createPayment("stripe");
payment.pay(1500);

const payment2 = createPayment("paypal");
payment2.pay(30000);

const payment3 = createPayment("yandex");
payment3.pay(60000);
