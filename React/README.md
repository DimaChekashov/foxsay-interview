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