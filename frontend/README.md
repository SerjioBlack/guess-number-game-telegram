# Гра "Вгадай число"

Це проста гра "Вгадай число", реалізована як міні-додаток для Telegram-бота з використанням WebView-2. Фронтенд частина розроблена на React.js, а бекенд - на Node.js з використанням Express.js.

## Структура проекту

guess-number-game/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   └── package.json
└── README.md

## Локальний запуск

Для локального запуску проекту виконайте наступні кроки:

1. Клонуйте репозиторій

2. Запустіть бекенд:

cd backend
npm install
npm start

Сервер запуститься на порту 3001.

3. В новому терміналі запустіть фронтенд:

cd frontend
npm install
npm start

Фронтенд запуститься на порту 3000.

4. Відкрийте браузер і перейдіть за адресою `http://localhost:3000` для гри.

