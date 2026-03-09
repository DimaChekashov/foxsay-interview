class StripePayment {
  pay(amount) {
    console.log(`Stripe: ${amount}₽`);
  }
}
class PaypalPayment {
  pay(amount) {
    console.log(`PayPal: ${amount}₽`);
  }
}
class YandexPayment {
  pay(amount) {
    console.log(`Yandex: ${amount}₽`);
  }
}

class PaymentFactory {
  static create(type) {
    const map = {
      stripe: StripePayment,
      paypal: PaypalPayment,
      yandex: YandexPayment,
    };
    const Payment = map[type];
    if (!Payment) throw new Error(`Неизвестный тип: ${type}`);
    return new Payment();
  }
}

const payment = PaymentFactory.create("stripe");
payment.pay(1500);

const payment2 = PaymentFactory.create("paypal");
payment2.pay(30000);

const payment3 = PaymentFactory.create("yandex");
payment3.pay(60000);
