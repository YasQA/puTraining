//4) Есть 3 функции, которые принимают в качестве аргумента стрингу:
// uppercase, trimSpaces, reverseString.
// Чтобы получить результат выполнения всех этих функций нужно выполнить цепочку: ...

// Создайте функцию combine, которая будет принимать неограниченное кол-во функций
// и позволит получить результат таким образом:
// const updateString = combine(trimSpaces, reverseString, uppercase);
// const final = updateString('Hello Word!')

function combine(...args) {
    return function(str) {
        return args.reduceRight((result, current) => {
            return current(result)
        }, str);
    }
}

const updateString = combine(trimSpaces, reverseString, uppercase);
const final = updateString('Hello Word!')
console.log(final)

function uppercase(str) {
    return str.toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function trimSpaces(str) {
    return str.trim();
}

