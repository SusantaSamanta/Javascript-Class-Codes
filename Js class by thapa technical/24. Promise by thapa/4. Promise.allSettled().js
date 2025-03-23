let promise1 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Successful 1")
    },2000);
})
let promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Successful 2")
    },2000);
})
let promise3 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Successful 3");
    },3000);
})
let promise4 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Failed 4");
        // resolve("Successful 4");
    },3500);
})

// Promise.allSettled([p1, p2,]) show all Promises status in side an arr
Promise.allSettled([promise1, promise2, promise3, promise4]).then((res) =>{ 
    console.log(res);   // then() is show all the statuses if the promises 
}).catch((errors) => { 
    console.log(errors);  //  i think catch() is not use
});

