//4) Есть 3 функции, которые принимают в качестве аргумента стрингу:
// uppercase, trimSpaces, reverseString.
// Чтобы получить результат выполнения всех этих функций нужно выполнить цепочку: ...

// Создайте функцию combine, которая будет принимать неограниченное кол-во функций
// и позволит получить результат таким образом:
// const updateString = combine(trimSpaces, reverseString, uppercase);
// const final = updateString('Hello Word!')

function combine() {
    let functionsArray = [];
    for (let i = 0; i < arguments.length; i++) {
        functionsArray.push(arguments[i]);
    }
    return function(str) {
        for (let i = 0; i < functionsArray.length; i++) {
            str = functionsArray[i](str);
        }
        return str;
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

