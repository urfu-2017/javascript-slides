---
theme : "white"
customTheme: "yandex"
transition: "none"
highlightTheme: "github"
slideNumber: true
history: true
---

<span style="font-size: 97.5%; font-weight: lighter; transform: translateY(80%); display: block">язык программирования</span>

# JavaScript

---

### Сегодня в программе

- глобальный объект
- функции
- массивы и другие коллекции
- даты и регулярные выражения

---

## Глобальный объект

--

> Some of my biggest regrets!

<small>Brendan Eich</small>

--

#### Глобальная область видимости

<pre><code>&lt;script>
  let name = "Roman";
&lt;/script>

&lt;script>
  console.log(name); // "Roman"
&lt;/script>
</code></pre>

--

#### Локальная область видимости

<pre><code>&lt;script>
  (function () {
      let name = "Roman";
  }());
&lt;/script>
</code></pre>

<small>Избегайте глобальных переменных.</small>

--

#### Модули ECMAScript

<pre><code>&lt;script type="module">
  let name = "Roman";
&lt;/script>
</code></pre>

--

#### Глобальный объект

<pre><code>&lt;script>
  Number();

  window.Number();
&lt;/script>
</code></pre>

--

Браузер

```js
window
```

Node.js

```js
global
```

--

#### Свойства глобального объекта

- Конструкторы
- Ошибки
- Экранирование
- Работа с числами
- Коллекции

--

#### Функции-конструкторы

```
Array              Number
Boolean            Object
Date               RegExp
Function           String

```

--

#### 3 роли конструкторов

- Создание объекта
- Приведение типа
- Пространство имён

--

#### Создание объекта

```js
// массив заданного размера
let predefinedSize = new Array(31);

// выражение на основе переменных
let expr = new RegExp(`${prefix}`);
```

<small>Однако, в большинстве случаев лучше использовать литерал, а не конструктор.</small>

--

#### Приведение типа

```js
String(5); // '5'

Number('30'); // 30

Boolean([]); // true
```

--

#### Пространства имён

```js
Array.isArray([]);

String.fromCharCode('48');

Number.MAX_SAFE_INTEGER;
```

<small>Используйте REPL, чтобы изучить свойства того или иного пространства имён.</small>

--

#### Конструкторы ошибок

```
Error              SyntaxError
EvalError          TypeError
RangeError         URIError
ReferenceError
```

--

#### Обработка конкретных видов ошибок

```js
try {
  JSON.parse('Invalid JSON');
} catch (err) {
  if (err instanceof SyntaxError) {
    // handle error
  }
  throw err;
}
```

--

#### Функции для экранирования

```
decodeURI
decodeURIComponent
encodeURI
encodeURIComponent
```

<small>Эти функции пригодятся, если вы будете самостоятельно формировать URL.</small>

--

```
> encodeURI('Hello world')
"Hello%20world"
```

--

#### Функции для работы с числами

```
isFinite
isNaN
parseFloat
parseInt
```

--

#### Коллекции

```
Map
Set
WeakMap
WeakSet
```

--

#### Типизированные массивы

```
ArrayBuffer     Int8Array
DataView        Uint16Array
Float32Array    Uint32Array
Float64Array    Uint8Array
Int16Array      Uint8ClampedArray
Int32Array

```

--

#### Консоль

```
console.log
console.error
console.time
console.timeEnd
```

--

#### Измерение времени

```bash
> console.time('timer')
undefined
> console.timeEnd('timer')
timer: 6384.525ms
```

---

## Функции

--

#### Function Expression

```js
let greet = function (whom) {
    return `Hello ${whom}`;
};

greet('world'); // Hello world
```

--

#### Named Function Expression

```js
let count = function step(number) {
    console.log(number);

    if (number > 0) {
        step(number - 1);
    }
};
```

--

#### Function Declaration

```js
function greet(whom) {
    return `Hello ${whom}`;
}

greet('world');
```

--

#### Hoisting (Всплытие)

```js
greet('world'); // Hello world

function greet(whom) {
    return `Hello ${whom}`;
}
```

<small>Всплытие характерно только для Function Declaration. Для Function Expression вызывать функцию можно только после объявления.</small>

--

#### Arrow Functions

```js
let greet = (whom) => {
    return `Hello ${whom}`;
};

let greet = whom => `Hello ${whom}`;
```

--

#### Применение стрелочных функций

```js
let us = ['me', 'you']

us.map(whom => `Hello ${whom}`);
// ['Hello me', 'Hello you']
```

--

#### Возврат объекта

```js
let createPerson = () => ({
    name: 'Roman', 
    age: 28 
});
```

<small>Если стрелочная функция возвращает объект, фигурные скобки нужно обернуть в круглые.</small>

--

#### Аргументы и параметры

```js
function sum(a, b) { // parameters
    return a + b;
}

sum(2, 3); // arguments
```

--

#### Неявный возврат значения

```js
function sum(a, b) {
    
}

sum(1, 2); // undefined
```

--

#### Недостающие аргументы

```js
function sum(a, b) {
    return a + b;
}

sum(1); // NaN (1 + undefined)
```

--

#### Значение параметра по умолчанию

```js
function sum(a, b = 2) {
    return a + b;
}

sum(1); // 3
```

--

#### Значение по умолчанию (ES5)

```js
function sum(a, b) {
    if (b === undefined) {
        b = 2;
    }
    return a + b;
}

sum(1); // 3
```

--

#### Значение по умолчанию (ES5)

```js
function sum(a, b) {
    b = b || 2;

    return a + b;
}

sum(1); // 3
```

--

#### Значение по умолчанию (ES5)

```js
function sum(a, b) {
    b = b || 2;

    return a + b;
}

sum(1, 0); // 3 😱
```

--

#### Произвольное количество параметров

```js
function sumAll(a, b, c, d, e, f) {
    ...
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
```

--

#### Rest Operator

```js
function sumAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
```

--

#### Arguments (ES5)

```js
function sumAll() {
    let total = 0;

    for (let number of arguments) {
        total += number;
    }

    return total;
}
```

--

#### Произвольное количество аргументов

```js
Math.max(1, 2, 3, 4, 5); // 5

let numbers = [1, 2, 3, 4, 5];
Math.max(numbers); // NaN
```

--

#### Spread Operator

```js
let numbers = [1, 2, 3, 4, 5];

Math.max(...numbers);
```

--

#### Apply (ES5)

```js
let numbers = [1, 2, 3, 4, 5];

Math.max.apply(null, numbers); 
```

--

#### Проблема позиционных аргументов

```js
let showButton =
  function (round, animated) {
    if (round)    { ... }
    if (animated) { ... }
  };

showButton(true, false);
```

--

#### Именованные аргументы (ES5)

```js
let showButton =
  function (params) {
    if (params.round)    { ... }
    if (params.animated) { ... }
  };

showButton({ round: true,
          animated: false });
```

--

#### Destructuring Operator

```js
let showButton =
  function ({ round, animated }) {
    if (round)   { ... }
    if (animated) { ... }
  };

showButton({ round: true, 
          animated: false });
```

--

#### Default Named Arguments

```js
let showButton =
  function ({ round    = false
            , animated = false }) {
    ...
  };

showButton({ round: true });
```

---

## Массивы

--

#### Holes (Дырки)

```js
let chars = [];

chars[0] = 'a';
chars[2] = 'c';

console.log(chars); // ['a', , 'c']
```

<small>Такой массив называется разрежённым.</small>

--

#### Конструктор

```js
let chars = new Array(3);
console.log(chars); // [ , , ]

chars.fill(0);
console.log(chars); // [0, 0, 0]
```

<small>Конструктор создаёт массив с дырками. Их нужно заполнить самостоятельно.</small>

--

#### Удаление элемента

```js
let chars = ['a', 'b', 'c'];

delete chars[2];

console.log(chars); // ['a', 'b', ]
console.log(chars.length); // 3
```

--

#### Вырезание элемента

```js
let chars = ['a', 'b', 'c'];

chars.splice(1, 2); // ['b', 'c']

console.log(chars); // ['a']
console.log(chars.length); // 1
```

--

#### Длина массива

```bash
> [ 'a', 'b' ].length
2
> [ 'a', , 'b' ].length
3
```

<small>Свойство `length` отслеживает наибольший индекс элемента массива, а не его размер.</small>

--

#### Изменение длины массива

```bash
let chars = ['a', 'b', 'c'];

chars.length = 5;
console.log(chars); // ['a', 'b', 'c', , ]

chars.length = 1;
console.log(chars); // ['a']
```

--

#### Методы массива

- Destructive – изменяют исходный массив

- Nondestructive – создают новый массив

--

#### Добавление и удаление элементов

```
shift      pop      splice
unshift    push
```

<small>Эти методы изменяют исходный массив.</small>

--

#### Упорядочивание элементов

```
reverse
sort
```

<small>Эти методы изменяют исходный массив.</small>

--

#### Сортировка чисел

```js
[1, 2, 10]
    .sort(); // [1, 10, 2]
```

--

#### Сортировка чисел

```js
let asNumbers = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

[1, 2, 10]
    .sort(asNumbers); // [1, 2, 10]
```

--

#### Сортировка строк

```js
['уж', 'ёж']
    .sort(); // ['уж', 'ёж']
```

--

#### Сортировка строк

```js
let asStrings = (a, b) => {
    return a.localeCompare(b);
}

['уж', 'ёж']
    .sort(asStrings); // ['ёж', 'уж']
```

--

#### Операции над массивами

```
concat
slice
join
```

--

#### Slice

```js
let chars = ['a', 'b', 'c'];

chars.slice(0, 1); // ['a']
chars.slice(1, -1); // ['b']
chars.slice(-2); // ['b', 'c']
chars.slice(); // ['a', 'b', 'c']
```

<small>slice удобно использовать перед вызовом мутирующего метода, чтобы не затрагивать исходный массив.</small>

--

#### Итерирование и трансформация

```
arr.<method>(callback);

function callback(value, index) {
    ...
}
```

<small>Все рассматриваемые далее методы создают новый массив, а не изменяют исходный.</small>

--

#### ForEach

```js
let fruits = ['apple', 'pear'];

fruits.forEach((elem, index) => {
    console.log(elem, index);
});
```

--

#### Some, Every

```js
let numbers = [1, 10, 2];
let result = numbers.some(x => {
    return x > 5;
});

console.log(result); // true
```

<small>some и every – ленивые методы. Они не будут обходить все элементы, если условие уже выполнено (или уже не выполнено).</small>

--

#### Filter

```js
let numbers = [1, -10, 2];
let positive = numbers.filter(x => {
    return x > 0;
});

console.log(positive); // [1, 2]
console.log(numbers); // [1, -10, 2]
```

--

#### Удаление элемента по индексу

```js
let numbers = [1, -10, 2];

numbers = numbers.filter((x, i) => {
    return i !== 1;
});

console.log(numbers); // [1, 2]
```

--

#### Удаление falsy элементов

```js
let numbers = [1, undefined, 2];

numbers = numbers.filter(Boolean);

console.log(numbers); // [1, 2]
```

<small>Данный подход не сработает для удаления дырок в массиве – filter, как и остальные методы из этой группы, пропускает дырки при обходе массива.</small>

--

#### Map

```js
let numbers = [1, 2];
let doubles = numbers.map(x => {
    return x * 2;
});

console.log(doubes); // [2, 4]
```

--

#### Reduce

```js
let xs = [1, 2, 3];
let sum = xs.reduce((prev, x) => {
    return prev + x;
});
```

--

#### Цепочки вызовов

```js
let numbers = [1, -1, 3, -3];

numbers
    .filter(x => x > 0)
    .map(x => x * 2)
    .reduce((x, y) => x + y);

```

<small>Если коллбэк становится слишком большим, его стоит вынести в переменную. Таким образом можно сохранять цепочку вызовов компактной и простой для понимания.</small>

---

## Коллекции

--

#### Set

```js
let set = new Set(['hello', 'world', 'hello']);

set.size; // 2
set.has('hello'); // true
```

--

#### Сравнение элементов

```js
let set = new Set();

set.add({ name: "Roman" });
set.add({ name: "Roman" });

set.size; // 2
```

<small>Сравнение осуществляется эквивалентно оператору ===, за исключением NaN – он считается равным самому себе. Также считаются равными +0 и -0</small>

--

#### Преобразование в массив

```js
let set = new Set(['hello', 'world', 'hello']);

let arr = [...set];
console.log(arr); // ['hello', 'world']
```

--

#### Map

```js
let map = new Map();
let key = {};

map.set(key, 'Hello');
map.get(key); // Hello
```

--

#### WeakMap, WeakSet

- Ключи могут быть удалены сборщиком мусора
- Ключами могут быть только объекты
- Подходят для реализации кэшей и обработчиков событий

---

## Date

--

#### Date Time String

Строка в формате ISO 8601 Extended Format.

```js
new Date('2017-10-17T19:48:21.684Z')
```
<small>Не рекомендуется – результат зависит от реализации.</small>

--

Node.js

```bash
> new Date('2017-10-17T00:00:00')
2017-10-17T00:00:00.000Z
```

Браузер

```bash
❯ new Date('2017-10-17T00:00:00')
2017-10-16T19:00:00.000Z
```

--

#### Timestamp

Количество миллисекунд с 1970-01-01.

```js
new Date(timestamp)
```

--

```bash
> new Date(1508270783253)
2017-10-17T20:06:23.253Z
```

--

#### Timestamp текущего момента

```js
let currentTimestamp = Date.now();

new Date(currentTimestamp);
```

--

#### Без аргументов

Создаёт объект для текущей даты и времени.

```js
new Date()
```

--

```bash
> new Date()
2017-10-17T19:59:20.068Z
```

--

#### Отдельные значения

Создаёт объект с учётом временной зоны.

```js
new Date(year, month, date?,
    hours?, minutes?, seconds?,
    milliseconds?
)
```
<small>Месяц — в пределах от 0 (январь) до 11 (декабрь).</small>

--

```bash
> new Date(2012, 10, 10)
2012-11-09T19:00:00.000Z
```

--

#### Значения в UTC

```js
let ts = Date.UTC(2012, 10, 10);
let utcDate = new Date(ts);
```

--

```bash
> new Date(Date.UTC(2012, 10, 10))
2012-11-10T00:00:00.000Z
```

--

#### Методы для чтения и изменения

Локальное время

- `get<unit>`
- `set<unit>`

UTC

- `getUTC<unit>`
- `setUTC<unit>`

--

#### &lt;unit>

<table><tr><td><ul>
<li>`FullYear`</li>
<li>`Month`</li>
<li>`Date`</li>
<li>`Day`</li>
</ul></td><td><ul>
<li>`Hours`</li>
<li>`Minutes`</li>
<li>`Seconds`</li>
<li>`Milliseconds`</li>
</ul></td></tr></table>

--

```bash
> let d = new Date(2010, 10, 10)
'Wed Nov 10 2010 00:00:00 GMT+0500'
> d.getMonth()
10
> d.setUTCHours(20)
1289332800000
```

--

#### Используйте `getFullYear`

```bash
> d.getYear()
110
> d.getFullYear()
2010
```

<small>`getYear`, `setYear`, `getUTCYear`, `setUTCYear` – deprecated.

--

#### Приведение к строке

Для компьютеров

```bash
> d.toISOString()
'2010-11-09T20:00:00.000Z'
```

Для людей

```bash
> `${d.getHours()}:${d.getMinutes()}`
'1:40'
```

--

#### Прочие методы объекта даты

Timestamp.

```js
new Date().getTime()
```

Смещение в минутах относительно UTC.

```js
new Date().getTimezoneOffset()
```

---


## RegExp

--

> If it's more than two inches,<br>rethink&nbsp;it. You probably want<br>to use a&nbsp;different tool.

<small>Douglas Crockford</small>

--

```
/^\d{2}:\d{2}:\d{2}$/
```

--

<pre><code style="white-space:pre-wrap">/^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/
</code></pre>

--

#### Конструктор

```js
let name = 'Roman';
let regex = 
  new RegExp(`Hello ${name}`);

let str = 'Hello Roman!'
str.replace(regex, 'Hi Pyotr');
```

--

#### Буква «ё»

```js
/\w/.test('ё');     // false
/[а-я]/.test('ё');  // false

/[а-яё]/.test('ё'); // true
```

--

#### Множественная замена

```js
'аа'.replace('а', 'A'); // 'Aa'

'аа'.replace(/а/g, 'A'); // 'AA'
```

<small>g – глобальный флаг регулярного выражения</small>

---

## Материалы

--

#### Глобальный объект

- [Global Variables](http://speakingjs.com/es5/ch16.html#_global_variables)
- [The Global Object](http://speakingjs.com/es5/ch16.html#global_object)
- [23. Standard Global Variables](http://speakingjs.com/es5/ch23.html)
- [9.7 The global object](http://exploringjs.com/es6/ch_variables.html#sect_global-object)
- [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)

--

#### Функции

- [15. Functions](http://speakingjs.com/es5/ch15.html)
- [4.4 From function expressions to arrow functions](http://exploringjs.com/es6/ch_core-features.html#sec_from-func-expr-to-arrow-func)
- [4.5 Handling multiple return values](http://exploringjs.com/es6/ch_core-features.html#sec_multiple-return-values-core-feature)
- [4.7 Handling parameter default values](http://exploringjs.com/es6/ch_core-features.html#sec_param-defaults-core-feature)
- [4.8 Handling named parameters](http://exploringjs.com/es6/ch_core-features.html#sec_named-params-core-feature)
- [4.9 From arguments to rest parameters](http://exploringjs.com/es6/ch_core-features.html#sec_from-arguments-to-rest)

--

#### Функции

- [4.10 From apply() to the spread operator (...)](http://exploringjs.com/es6/ch_core-features.html#sec_from-apply-to-spread)
- [9.6 Parameters as variables](http://exploringjs.com/es6/ch_variables.html#sec_parameters-as-variables)
- [9.8 Function declarations and class declarations](http://exploringjs.com/es6/ch_variables.html#sec_func-decl-class-decl)
- [11. Parameter handling](http://exploringjs.com/es6/ch_parameter-handling.html)
- [27. Tail call optimization](http://exploringjs.com/es6/ch_tail-calls.html)

--

#### Массивы

- [18. Arrays](http://speakingjs.com/es5/ch18.html)
- [4.6 From for to forEach() to for-of](http://exploringjs.com/es6/ch_core-features.html#sec_for-foreach-forof)
- [4.11 From concat() to the spread operator (...)](http://exploringjs.com/es6/ch_core-features.html#sec_from-concat-to-spread)
- [4.17 New Array methods](http://exploringjs.com/es6/ch_core-features.html#sec_new-array-methods-core-feature)
- [10. Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
- [18. New Array features](http://exploringjs.com/es6/ch_arrays.html)

--

#### Прочее

- [19. Regular Expressions](http://speakingjs.com/es5/ch19.html)
- [20. Dates](http://speakingjs.com/es5/ch20.html)
- [19. Maps and Sets](http://exploringjs.com/es6/ch_maps-sets.html)
- [20. Typed Arrays](http://exploringjs.com/es6/ch_typed-arrays.html)

---

## Конец
