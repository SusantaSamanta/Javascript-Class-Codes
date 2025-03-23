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
        // reject("Failed 4");
        resolve("Successful 4");
    },3500);
})

Promise.all([promise1, promise2, promise3, promise4]).then((res) =>{ 
    console.log(res); // if all promise in Promise.all([]) resolve then
}).catch((errors) => {
    console.log(errors);  //if one of the promise if fail catch
});

