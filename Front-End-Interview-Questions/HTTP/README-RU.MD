# Вопросы по HTTP

## 1 Как работает HTTP? Что такое HTTP/2?

HTTP — это протокол, позволяющий получать различные ресурсы, например HTML-документы. Протокол HTTP лежит в основе обмена данными в Интернете. HTTP является протоколом клиент-серверного взаимодействия, что означает инициирование запросов к серверу самим получателем, обычно веб-браузером. Полученный итоговый документ будет состоять из различных поддокументов, являющихся частью итогового документа: например, из отдельно полученного текста, описания структуры документа, изображений, видео-файлов, скриптов и многого другого.

<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png" />

Клиенты и серверы взаимодействуют, обмениваясь одиночными сообщениями (а не потоком данных). Сообщения, отправленные клиентом, обычно веб-браузером, называются запросами, а сообщения, отправленные сервером, называются ответами.

<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png" />

Хотя HTTP был разработан ещё в начале 1990-х годов, за счёт своей расширяемости в дальнейшем он все время совершенствовался. HTTP является протоколом прикладного уровня, который чаще всего использует возможности другого протокола - TCP - для пересылки своих сообщений, однако любой другой надёжный транспортный протокол теоретически может быть использован для доставки таких сообщений. Благодаря своей расширяемости, он используется не только для получения клиентом гипертекстовых документов, изображений и видео, но и для передачи содержимого серверам, например, с помощью HTML-форм. HTTP также может быть использован для получения только частей документа с целью обновления веб-страницы по запросу.

HTTP/2 - это старшая версия сетевого протокола HTTP. Основным назначением HTTP/2 является снижение задержки путём реализации полного мультиплексирования запросов и ответов, уменьшения перегруженности протокола при помощи эффективного сжатия заголовков HTTP, а также добавления поддержки приоритетов запроса и "server push".

HTTP/2 никоим образом не изменяет семантику применяемую HTTP. Все основные концепции HTTP 1.1, такие как методы HTTP, коды статусов, URI, и поля заголовков останутся прежними. Вместо этого HTTP/2 изменит порядок данных и способ их передачи между клиентом и сервером, которые управляют всем процессом, и скроет сложность применения в новом обрамляющем слое. Это позволит использовать существующие приложения без изменений.

## 2 Как работает HTTPS?

HTTPS - является зашифрованной версией HTTP протокола. Обычно он использует SSL или TLS для шифрования соединения между клиентом и сервером. Это безопасное соединение позволяет клиентам безопасно обмениваться конфиденциальными данными с сервером, например, для банковских операций или онлайн-покупок.

HTTPS работает благодаря SSL/TLS-сертификату. SSL/TLS-сертификат ― это цифровая подпись сайта. С её помощью подтверждается его подлинность. Перед тем как установить защищённое соединение, браузер запрашивает этот документ и обращается к центру сертификации, чтобы подтвердить легальность документа. Если он действителен, то браузер считает этот сайт безопасным и начинает обмен данными. Вот откуда взялась и что означает S в HTTPS.

#### Схема работы HTTPS
1. Браузер пользователя просит предоставить SSL-сертификат.
2. Сайт на HTTPS отправляет сертификат.
3. Браузер проверяет подлинность сертификата в центре сертификации.
4. Браузер и сайт договариваются о симметричном ключе при помощи асимметричного шифрования.
5. Браузер и сайт передают зашифрованную информацию.