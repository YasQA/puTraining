//Верните контекст у setTimeout. Сделать это 2-мя способами

const user = {
    name: "John Smith",
    sayHi: function() {
        alert(this.name)
    },
    //1
    timeoutSayHi: function() {
        setTimeout(() => user.sayHi(), 1000);
    },
    //2
    timeoutSayHi2: function() {
        setTimeout(this.sayHi.bind(this), 2000);
    },

};
user.sayHi();
user.timeoutSayHi()
user.timeoutSayHi2()
