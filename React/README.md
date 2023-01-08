# Basics

## Create React App

**Create React App** — это официально поддерживаемый способ создания одностраничных приложений React. Он предлагает современную настройку сборки без настройки.

**Быстрый старт:**

```
npx create-react-app my-app
cd my-app
npm start
```

Затем откройте [http://localhost:3000/](http://localhost:3000/) чтобы увидеть ваше приложение.

Когда вы будете готовы к развертыванию в продакшене, создайте минифицированный бандл с помощью команды `npm run build`.

Создать проект можно тремя способами:

1. `npx create-react-app my-app`
2. `npm init react-app my-app`
3. `yarn create react-app my-app`

**Шаблоны**

Вы можете добавить шаблоны в вашу сборку добавив в команду `--template [template-name]` 

```
npx create-react-app my-app --template [template-name]
```

**Структура проекта**

После сборки проекта, в месте вызова команды будет создана папка с названием проекта и такой файловой структурой:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

**Scripts**

Внутри проекта можно запустить его выполнив команду `npm start` или `yarn start`.

Проект будет запущен в режиме разработки после чего его можно будет открыть по ссылке [http://localhost:3000](http://localhost:3000/)

**`npm test` или `yarn test`**

Запускает тесты интерактивном режиме. По умолчанию запускает тесты, связанные с файлами, измененными с момента последнего коммита.

**`npm run build` or `yarn build`**

Выполняет сборку проекта и помещает в папку **build**. React объединяется в режиме для продакшена и оптимизирует сборку для достижения наилучшей производительности.

Сборка минимизирована, а имена файлов включают хэши.

**Ссылки:** [https://create-react-app.dev/](https://create-react-app.dev/)

## `JSX`

Что такое `JSX`?

1. JSX расшифровывается как JavaScript XML;
2. JSX позволяет нам писать HTML в React;
3. JSX делает легким написание и добавление HTML в React;

JSX позволяет нам писать HTML элементы в JavaScript и вставлять их в DOM без `createElement()` и `appendChild()` методов.

JSX конвертирует HTML теги в react элементы.

Пример использования JSX:

```jsx
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

Без JSX код выглядит так:

```jsx
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

Как можно увидеть из первого примера, JSX позволяет писать HTML напрямую внутри JavaScript код.
JSX является расширением языка JavaScript на основе ES6, и переводится в обычный JavaScript во время выполнения.

**Выражения в JSX**

С помощью JSX можно писать выражения внутри фигурных скобок `{ }`.

Выражения могут быть React переменной, или свойством, или любое другое допустимое выражение JavaScript. JSX выполнит выражение и вернет результат:

```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

**Вставка большого блока HTML**

Чтобы написать HTML в несколько строк, поместите HTML в круглые скобки:

```jsx
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```

**Один элемент верхнего уровня**

HTML код должен оборачиваться в один верхний элемент.

Если нужно написать два абзаца, тогда нужно поместить их в родительский элемент, например элемент `div`.

```jsx
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

JSX выдаст ошибку, если HTML неверен или если в HTML отсутствует родительский элемент.

В качестве альтернативы вы можете использовать «фрагмент» для переноса нескольких строк. Это предотвратит ненужное добавление дополнительных узлов в DOM.

Фрагмент выглядит как пустой тег HTML: `<></>`.

```jsx
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

**Элементы должны быть закрыты**

JSX следует правилам XML, поэтому элементы HTML должны быть правильно закрыты.

```jsx
const myElement = <input type="text" />;
```

**Attribute class = className**

Атрибут `class` является часто используемым в HTML, но поскольку JSX отображается как JavaScript, а ключевое слово `class` зарезервированным словом в JavaScript, то его не разрешено использовать в JSX.

Вместо этого используйте атрибут `className`.

JSX решил эту проблему, используя className вместо этого. Когда JSX визуализируется, он переводит атрибуты className в атрибуты класса.

```jsx
const myElement = <h1 className="myclass">Hello World</h1>;
```

**Conditions - if statements**

React поддерживает операторы `if`, но не внутри JSX.

```jsx
// Example 1
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

// Example 2
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```