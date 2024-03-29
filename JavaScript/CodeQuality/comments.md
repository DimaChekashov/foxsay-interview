## Комментарии
Комментарии могут быть однострочными, начинающимися с //, и многострочными: /* ... */.
Обычно мы их используем, чтобы описать, как и почему работает код.

### Плохие комментарии
Новички склонны использовать комментарии, чтобы объяснять, «что делает код». Например, так:
```JavaScript
// Этот код делает это (...) и вот это (...)
// ...и кто знает, что ещё...
очень;
сложный;
код;
```
Но в хорошем коде количество «объясняющих» комментариев должно быть минимальным. Серьёзно, код должен быть таким, чтобы его можно было понять без комментариев.

Про это есть хорошее правило: «Если код настолько запутанный, что требует комментариев, то, может быть, его стоит переделать?»

### Хорошие комментарии
Итак, обычно «объясняющие» комментарии – это плохо. Но тогда какой комментарий считается хорошим?
1. Описывайте архитектуру
2. Документируйте параметры и использование функций
3. Почему задача решена именно таким способом?
4. В коде есть какие-то тонкости? Где они используются?

### Итого
Комментарии – важный признак хорошего разработчика, причём как их наличие, так и отсутствие.

Хорошие комментарии позволяют нам поддерживать код, дают возможность вернуться к нему после перерыва и эффективнее его использовать.

#### Комментируйте:
* Общую архитектуру, вид «с высоты птичьего полёта».
* Использование функций.
* Неочевидные решения, важные детали.

#### Избегайте комментариев:
* Которые объясняют, как работает код, и что он делает.
* Используйте их только в тех случаях, когда невозможно сделать настолько простой и самодокументированный код, что он не потребует комментариев.

Средства для генерации документации по коду, такие как JSDoc3, также используют комментарии: они их читают и генерируют HTML-документацию (или документацию в другом формате).