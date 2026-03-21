class Express {
  cost() {
    return 100;
  }
  description() {
    return "Эспрессо";
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

class Milk extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 30;
  }

  description() {
    return this.coffee.description() + ", молоко";
  }
}

class Caramel extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 50;
  }
  description() {
    return this.coffee.description() + ", карамель";
  }
}

class Sugar extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 10;
  }
  description() {
    return this.coffee.description() + ", сахар";
  }
}

let coffee = new Express();
coffee = new Milk(coffee);

console.log(coffee.description());
console.log(coffee.cost());

coffee = new Caramel(coffee);
coffee = new Sugar(coffee);

console.log(coffee.description());
console.log(coffee.cost());
