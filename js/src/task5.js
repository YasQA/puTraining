//5) Написать функцию которая принимает функцию и количество миллисекунд и возвращает функцию обертку.
// Каждый раз когда обертка будет вызвана,
// должна вызываться внутренняя функция,
// НО внутренняя функция не должна быть вызвана чаще чем раз в переданное кол-во миллисекунд.n

const logger = number => console.log(number);

function throttle(func, delay) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, delay);
    }

    return wrapper;
}

const log1000 = throttle(logger, 1000)

log1000(1);
log1000(2);
log1000(3);
