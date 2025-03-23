let promise1 = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Successful 1")
    },4000);
})
let promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Failed 2");
        // resolve("Successful 2")
    },3000);
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
    },6600);
})

// Promise.race([p1, p2,]) show which promise is successful or failed first. 
//    If successful is first so then() if filed is first so catch()
Promise.race([promise1,promise2,promise3,promise4]).then((res) =>{ 
    console.log(res);   
}).catch((errors) => { 
    console.log(errors);  
});

