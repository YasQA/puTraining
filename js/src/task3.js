// 3) Реализовать функцию генератор,
//     в качестве аргументов функция принимает  start и step
//     (указывать не обязательно, по дефолту step = 1).
//     При вызове функция возвращает другую функцию,
//     которая возвращает стартовое число + степ.
//     Функции генераторы независимы между собой, можно создавать сколько угодно генераторов.

function stepper(st, stp = 1) {
    function* generateSequence(start, step) {
        for (let i = start + step; ; i += step) {
            yield i;
        }
    }

    let gen = generateSequence(st, stp);

    return function f1() {
        return gen.next().value;
    }
}

const generator = stepper(0, 3);
const generator1 = stepper(10);
console.log(generator())
console.log(generator())

console.log(generator1())
console.log(generator1())

console.log(generator())
