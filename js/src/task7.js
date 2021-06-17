// Написать промис delay, который выполнится через заданное время ms
//
// delay(3000)
//     .then(() => console.log('Hello World!'))

function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), time);
    })
}

delay(3000).then(() => console.log('Hello World!'));
