let myPromise = new Promise((resolve, reject) => {
    let num = Math.random();
    console.log(num.toFixed(2));
    setTimeout(() => {

        if ((Math.random()) > 0.5) {
            resolve("Successful");
        } else {
            reject("Failed");
        }
    }, 2000)
})

myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


