// JSON.parse() - принимает строку JSON в качестве параметра и возвращает соответствующую структуру данных JavaScript
// JSON.stringify() - принимает объект в качестве параметра и возвращает эквивалентную строковую JSON строку.

// Сохранение данных в LS
localStorage.setItem('key', [100, 200, 300]);

// Получить данные из LS
let str = localStorage.getItem('key');
console.log(str);

// Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами.
// Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму.
// Запустите второй скрипт и убедитесь в его работоспособности.

localStorage.setItem('a', 1488);
localStorage.setItem('b', 200);
localStorage.setItem('c', 300);

let a = Number(localStorage.getItem('a'));
let b = Number(localStorage.getItem('b'));
let c = Number(localStorage.getItem('c'));

let sum = a + b + c;
console.log(sum);

// Однократное сохранение в LS
let time = localStorage.getItem('time');

console.log(time);

console.log(Date.now())

let btnEnter = document.querySelector('#enter')

btnEnter.addEventListener('click', () => {
    if (time === null) {
        let now = Date.now();
        localStorage.setItem('time', now);
    } else {
        let now = Date.now();
        localStorage.clear()
        localStorage.setItem('time', now);
        let count = Date.now() - time;

        console.log(`С момента входа прошло ${count / 60000} минут`)

    }
})



// По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени.
// Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.


let keys = Object.keys(localStorage)
console.log(keys)


localStorage.setItem('key', 1)
let value1 = localStorage.getItem('key')

console.log('данные из LS', value1)


localStorage.setItem('key', 2)
value1 = localStorage.getItem('key')
console.log('данные из LS', value1)

localStorage.removeItem('key')
console.log(localStorage.getItem('key'))

console.log(localStorage.length)

let key = localStorage.key(1)

console.log(key)

console.log(localStorage.getItem(key))

let arr = [1, 2, 3, 4, 5,]
localStorage.setItem('arr', JSON.stringify(arr))

let str1 = localStorage.getItem('arr')
let result = JSON.parse(str1)
console.log(`${result} типа ${Array.isArray(result)}`)
// console.log(`${str1} типа ${typeof str1}`)
result.push(6)
console.log(result)
localStorage.setItem('arr', JSON.stringify(result))
