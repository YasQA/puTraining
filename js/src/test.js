if (!Promise.all) {
    Promise.all = function (promises) {
        return new Promise(function(resolve, reject) {
            let result = [];
            promises.map(p => Promise.resolve(p)
                .then(value => {
                        result.push(value)
                        if (result.length === promises.length) {
                            resolve(result);
                        }
                    }, error => {
                        reject(error);
                    }
                ))
        })
    }
}
