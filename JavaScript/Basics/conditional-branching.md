## Условное ветвление: if, '?'

### Инструкция «if»
Инструкция if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.
Например:
```JavaScript
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) alert( 'Вы правы!' );
```
В примере выше, условие – это простая проверка на равенство (year == 2015), но оно может быть и гораздо более сложным.

Если нужно выполнить более одной инструкции, то нужно заключить блок кода в фигурные скобки:
```JavaScript
if (year == 2015) {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
}
```
Рекомендовано использовать фигурные скобки {} всегда, когда вы используете инструкцию if, даже если выполняется только одна команда. Это улучшает читаемость кода.

### Преобразование к логическому типу
Инструкция if (…) вычисляет выражение в скобках и преобразует результат к логическому типу.

### Блок «else»
Инструкция if может содержать необязательный блок «else» («иначе»). Он выполняется, когда условие ложно.
Например:
```JavaScript
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}
```

### Несколько условий: «else if»
Иногда нужно проверить несколько вариантов условия. Для этого используется блок else if.
Например:
```JavaScript
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}
```

### Условный оператор „?“
Оператор представлен знаком вопроса ?. Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента.
Синтаксис:
```JavaScript
let result = условие ? значение1 : значение2;
```
Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.

### Несколько операторов „?“
Последовательность операторов вопросительного знака ? позволяет вернуть значение, которое зависит от более чем одного условия.
Например:
```JavaScript
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );
```

### Нетрадиционное использование „?“
Иногда оператор «вопросительный знак» ? используется в качестве замены if:
```JavaScript
let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');
```
В зависимости от условия company == 'Netscape', будет выполнена либо первая, либо вторая часть после ?.
Здесь мы не присваиваем результат переменной. Вместо этого мы выполняем различный код в зависимости от условия.

**Не рекомендуется использовать оператор вопросительного знака таким образом.**

Несмотря на то, что такая запись короче, чем эквивалентная инструкция if, она хуже читается.
Вот, для сравнения, тот же код, использующий if:
```JavaScript
let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}
```
При чтении глаза сканируют код по вертикали. Блоки кода, занимающие несколько строк, воспринимаются гораздо легче, чем длинный горизонтальный набор инструкций.

Смысл оператора «вопросительный знак» ? – вернуть то или иное значение, в зависимости от условия. Используйте его именно для этого. Когда вам нужно выполнить разные ветви кода – используй if.