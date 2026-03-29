const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

function createUserProxy(user) {
  return new Proxy(user, {
    get(target, prop) {
      if (prop === "email") {
        console.log("Requested access to email.");
        return "User email: " + target.email;
      }
      if (prop === "sayHello") {
        console.log("Requested access to sayHello method.");
      }
      return target[prop];
    },
  });
}

const userProxy = createUserProxy(user);

console.log(userProxy.email);
userProxy.sayHello();
