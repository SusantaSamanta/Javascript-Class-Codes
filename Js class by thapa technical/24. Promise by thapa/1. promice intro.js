
const myPromise = () =>{
    return new Promise((resolve, reject) =>{
        // resolve("Success");
        reject("failed");
    });
}

myPromise().then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() =>{
    console.log("Ok transaction complete");
})


const aPromise = new Promise ((resolve,  reject) =>{
    setTimeout(() => {
        //resolve({res : "Successful", status : 200, time : "2s"})
    }, 2000);
    setTimeout(() => {
        reject({res : "Failed", status : 900, time : "3s"})
    }, 3000);
})
aPromise.then(({res,status,time}) => {
    console.log("res :",res,", status :",status,", time :",time);
}).catch(({res,status,time}) =>{
    console.log("res :",res,", status :",status,", time :",time);
})