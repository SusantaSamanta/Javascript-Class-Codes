


const print = (ms) =>{
  console.log("print after milisc",ms);
}

setTimeout(print,2000);
setTimeout(() => print(2000),2000);

let a = setTimeout(() => print(2000),2000);

clearTimeout(a); // it block to call print at 3rd time 

