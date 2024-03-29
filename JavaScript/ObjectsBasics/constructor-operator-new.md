## Конструктор, оператор "new"
Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.

Это можно сделать при помощи функции-конструктора и оператора "new".

### Функция-конструктор
Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
1. Имя функции-конструктора должно начинаться с большой буквы.
2. Функция-конструктор должна выполняться только с помощью оператора "new".
Например:
```JavaScript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```
Когда функция вызывается как new User(...), происходит следующее:
1. Создаётся новый пустой объект, и он присваивается this.
2. Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
3. Возвращается значение this.
Другими словами, new User(...) делает что-то вроде:
```JavaScript
function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}
```
Таким образом, let user = new User("Jack") возвращает тот же результат, что и:
```JavaScript
let user = {
  name: "Jack",
  isAdmin: false
};
```
Теперь, если нам будет необходимо создать других пользователей, мы можем просто вызвать new User("Ann"), new User("Alice") и так далее. Данная конструкция гораздо удобнее и читабельнее, чем многократное создание литерала объекта.

Это и является основной целью конструкторов – реализовать код для многократного создания однотипных объектов.

**new function() { … }**
Если в нашем коде присутствует большое количество строк, создающих один сложный объект, то мы можем обернуть их в функцию-конструктор, которая будет немедленно вызвана, вот так:
```JavaScript
// создаём функцию и сразу же вызываем её с помощью new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и инструкции
  // локальные переменные и так далее
};
```
Такой конструктор не может быть вызван снова, так как он нигде не сохраняется, просто создаётся и тут же вызывается. Таким образом, этот трюк направлен на инкапсуляцию кода, который создаёт отдельный объект, без возможности повторного использования в будущем.

### Возврат значения из конструктора, return
Обычно конструкторы не имеют оператора return. Их задача – записать все необходимое в this, и это автоматически становится результатом.
Но если return всё же есть, то применяется простое правило:
* При вызове return с объектом, вместо this вернётся объект.
* При вызове return с примитивным значением, оно проигнорируется.
Другими словами, return с объектом возвращает этот объект, во всех остальных случаях возвращается this.
К примеру, здесь return замещает this, возвращая объект:
```JavaScript
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект
```
А вот пример с пустым return:
```JavaScript
function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // John
```
Обычно у конструкторов отсутствует return.

### Создание методов в конструкторе
Использование конструкторов для создания объектов даёт большую гибкость. Функции-конструкторы могут иметь параметры, определяющие, как создавать объект и что в него записывать.
Конечно, мы можем добавить к this не только свойства, но и методы.
Например, new User(name) ниже создаёт объект с заданным name и методом sayHi:
```JavaScript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

### Итого
* Функции-конструкторы или просто конструкторы, являются обычными функциями, но существует общепринятое соглашение именовать их с заглавной буквы.
* Функции-конструкторы следует вызывать только с помощью new. Такой вызов подразумевает создание пустого this в начале и возврат заполненного в конце.

Мы можем использовать конструкторы для создания множества похожих объектов.

JavaScript предоставляет функции-конструкторы для множества встроенных объектов языка: таких как Date, Set, и других.