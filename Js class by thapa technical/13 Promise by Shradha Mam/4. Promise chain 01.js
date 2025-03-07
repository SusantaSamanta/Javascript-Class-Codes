const fun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data 1');
      resolve('success');
    }, 3000);
  });
}

const fun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data 2');
      resolve('success');
    }, 3000);
  });
}
/*
console.log('fatching data 1......');
let promise = fun();
promise.then((res) => {
  console.log(res);
  console.log('fatching data 2......');
  let promise2 = fun2();
  promise2.then((res) => {
    console.log(res);
  });
});
*/     //👆 by simplefly the Syntex 👇

console.log('fatching data 1......');
fun().then((res) => {
  console.log(res);
  console.log('fatching data 2......');
  fun2().then((res) => {
    console.log(res);
  });
});




// ⭐ now promise chain example 👇


// in 📂 file 4.1 Promise chain 01.js


