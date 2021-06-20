// 3) Реализовать функцию генератор,
//     в качестве аргументов функция принимает  start и step
//     (указывать не обязательно, по дефолту step = 1).
//     При вызове функция возвращает другую функцию,
//     которая возвращает стартовое число + степ.
//     Функции генераторы независимы между собой, можно создавать сколько угодно генераторов.

function stepper(start, step = 1) {
    let current = start;
    return function f1() {
        return current += step;
    }
}

const generator = stepper(0, 3);
const generator1 = stepper(10);
console.log(generator())
console.log(generator())

console.log(generator1())
console.log(generator1())

console.log(generator())
