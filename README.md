# Клонируем репозиторий

<code>git clone https://github.com/sacredneobi/reactPreloader.git</code>

# Устанавливаем зависимости

<code>npm i</code>

# Запускаем проект

<code>npm start</code>

---

> по умолчанию проект запускается на порту <pre>http://localhost:81</pre>изменить это можно в файле <code>.env</code> в переменной <code>PORT</code>

---

### В этом проекте покажу пред загрузку страницы до загрузки основного бандла react

---

### Для проверки необходимо зайти в браузере в инструменты разработчика и перейти на вкладку сеть, после включить ограничение скорости <strong>Slow 3G / Fast 3G</strong>

---

> Автоматическое применение светлой и темной темы
> И так же прелоадер для картинок

---

### Добавлена пред загрузка шрифтов как указанных там и всех доступных на странице

hook useWaitFonts для ожидания загрузки шрифтов
первый параметр масив указанных шрифтов, если установить второй параметр в true то будут ожидание всех шрифтов подключенных уже на странице

ВАЖНО!!! необходимо подключить заранее на страницу шрифты чтобы они были доступны позже, через <link >

В примере работы со шрифтом иконок от google

---
