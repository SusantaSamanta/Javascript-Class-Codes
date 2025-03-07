/// code explenation on youtube channel : Shradha Khapra - lecture 12 Promice acync await




let promise = new Promise((resolve, reject) =>{
  console.log("hello promice.");
  resolve('ok');
});     // to run write promise on console 

let promise2 = new Promise((resolve, reject) =>{
  console.log("hello promice.");
  reject('error');
});     // to run write promise2 on console 


const fun = (id) => {
  return promise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log('This is id : '+id);
      resolve('id print success.')
    },8000);
  });
}
fun(1);   // to check promise3 status write promise3 before 8sc and after 8sc on console 


const fun2 = () => {
  return new Promise((resolve, reject) => {
    resolve("success");
    console.log("fun2 return resolved promise");
//  reject("error");
//  console.log("fun2 return reject promise");
  })
}

let promise4 = fun2();

promise4.then((res) => {
  console.log("promise4 fulfilled. ",res);
})

promise4.catch((err) => {
  console.log("promise5 rejected.  ",err);
})
    // if fun2 return reject promise then it will catch by promise4




