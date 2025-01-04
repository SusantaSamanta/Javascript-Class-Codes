// Difference between var and let

var nam = "Hello";
var nam = "Hello var";  // we declare multiple   variables with same name in var
let name = "Hello world";
// var name = "hello" // Error
// let name = "Hello let" // we can't declare multiple variables with same name and same Scope/block.



var nam = "Hello var";
if(1){
  console.log(nam);
}
console.log(nam);

// in same way let

let str = "Hello let"
if(1){
  console.log(str);
}
console.log(str);



// Scope of var and let


// type one
var a1 = 'a1 declare';
if(1){
  var a1 = 'a1 declare in scope';
  console.log(a1);
}
console.log(a1);

let b1 = 'b1 declare'; // we can create same variable with in other block. not same block.
if(1){
  let b1 = 'b1 declare in scope'; // it valid with in if block 
  console.log(b1);
}
console.log(b1); // this b1 is global variables. b1 inside if is not valid where. 







const con = 'Constant';
//con = 'Value put'; // it make error 
// we can't reassign value on const variables 




