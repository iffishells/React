const mypromise = new Promise((resolve, reject) => {

    if (true) {
        setTimeout(() => {
            resolve("i hav succeed");
        }, 1000)
    } else {
        reject("i have failed")
    }

})

Promise
    .then(value => console.log(value))
    .catch(reject => console.log("rejected"))