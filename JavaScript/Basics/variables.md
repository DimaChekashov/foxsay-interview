## Переменные
Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.

Для создания переменной в JavaScript используем ключевое слово let.
```JavaScript
let message;

message = 'Hello'; // сохранить строку 'Hello' в переменной с именем message
```
Строка сохраняется в области памяти, связанной с переменной. Можно получить к ней доступ, используя имя переменной:

В старых скриптах также можно найти другое ключевое слово: var вместо let:
```JavaScript
var message = 'Hello';
```
Ключевое слово var – почти то же самое, что и let. Оно объявляет переменную, но немного по-другому, «устаревшим» способом.

### Аналогия из жизни
Мы легко поймём концепцию «переменной», если представим её в виде «коробки» для данных с уникальным названием на ней.
Например, переменную message можно представить как коробку с названием "message" и значением "Hello!" внутри:
![alt text](https://learn.javascript.ru/article/variables/variable.svg)  
Можно положить любое значение в коробку.
Также можно изменить его столько раз, сколько захотим:
```javascript
let message;

message = 'Hello!';

message = 'World!'; // значение изменено

alert(message);
```
При изменении значения старые данные удаляются из переменной:
![alt text](https://learn.javascript.ru/article/variables/variable-change.svg)  
Также можно объявить две переменные и скопировать данные из одной в другую.
```JavaScript
let hello = 'Hello world!';

let message;

// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;

// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world!
```

### Имена переменных
В JavaScript есть два ограничения, касающиеся имён переменных:
1. Имя переменной должно содержать только буквы, цифры или символы $ и _.
2. Первый символ не должен быть цифрой.
Примеры допустимых имён:
```JavaScript
let userName;
let test123;
```
Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: myVeryLongName.

Самое интересное – знак доллара '$' и подчёркивание '_' также можно использовать в названиях. Это обычные символы, как и буквы, без какого-либо особого значения.

**Регистр имеет значение:** *Переменные с именами apple и APPLE – это две разные переменные.*

### Константы
Чтобы объявить константную, то есть, неизменяемую переменную, используйте const вместо let:
```JavaScript
    const myBirthday = '18.04.1982';
```
Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт к ошибке:
```JavaScript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ошибка, константу нельзя перезаписать!
```
Если программист уверен, что переменная никогда не будет меняться, он может гарантировать это и наглядно донести до каждого, объявив её через const.

**Константы в верхнем регистре**
Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.
Названия таких констант пишутся с использованием заглавных букв и подчёркивания.
Например, сделаем константы для различных цветов в «шестнадцатеричном формате»:
```JavaScript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
Преимущества:
* COLOR_ORANGE гораздо легче запомнить, чем "#FF7F00".
* Гораздо легче допустить ошибку при вводе "#FF7F00", чем при вводе COLOR_ORANGE.
* При чтении кода COLOR_ORANGE намного понятнее, чем #FF7F00.

Когда использовать для констант заглавные буквы, а когда называть их нормально?
Название «константа» просто означает, что значение переменной никогда не меняется. Но есть константы, которые известны до выполнения (например, шестнадцатеричное значение для красного цвета), а есть константы, которые вычисляются во время выполнения сценария, но не изменяются после их первоначального назначения.
Например:
```JavaScript
const pageLoadTime = /* время, потраченное на загрузку веб-страницы */;
```
Значение pageLoadTime неизвестно до загрузки страницы, поэтому её имя записано обычными, а не прописными буквами. Но это всё ещё константа, потому что она не изменяется после назначения.

Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.

### Придумывайте правильные имена
В разговоре о переменных необходимо упомянуть, что есть ещё одна чрезвычайно важная вещь.

Название переменной должно иметь ясный и понятный смысл, говорить о том, какие данные в ней хранятся.

Именование переменных – это один из самых важных и сложных навыков в программировании. Быстрый взгляд на имена переменных может показать, какой код был написан новичком, а какой – опытным разработчиком.

В реальном проекте большая часть времени тратится на изменение и расширение существующей кодовой базы, а не на написание чего-то совершенно нового с нуля. Когда мы возвращаемся к коду после какого-то промежутка времени, гораздо легче найти информацию, которая хорошо размечена. Или, другими словами, когда переменные имеют хорошие имена.

Несколько хороших правил:
* Используйте легко читаемые имена, такие как userName или shoppingCart.
* Избегайте использования аббревиатур или коротких имён, таких как a, b, c, за исключением тех случаев, когда вы точно знаете, что так нужно.
* Делайте имена максимально описательными и лаконичными. Примеры плохих имён: data и value. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.
* Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется «user», тогда мы должны называть связанные с ним переменные currentUser или newUser, а не, к примеру, currentVisitor или newManInTown.

### Итого
Переменные можно объявить для хранения данных с помощью ключевых слов var, let или const.
* let – это современный способ объявления.
* var – это устаревший способ объявления.
* const – похоже на let, но значение переменной не может изменяться.
Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.
