//           variable 


  var v = 50;
  var v = 90; // posible in var but not in let & const
  let l = 79;
//let l = 56; not possible 
  const c = 69;
//const c = 54; not possible 

const c1 = 8; //const initialize when declare
//c1 = 4 - this can make error 




//              scope 

let a=80; //global variable 
console.log('Outside a '+a);
function show(){
  let b=40; //local variable - it accessible inside this block 
  console.log('Inside a '+a);
  console.log('Inside b '+b);
}
show()


//   scope ex : 2


var v1 = 50;
function show2 () {
  var v1 = 40; //not accessible outside the fun
  console.log("Inside show2 v1 : "+v1); //op-40
}
show2();
console.log("Outside show2 v1 : "+v1);  //op-50

// without function only inside {} or block 
var v2 = 50;
{
  var v2 = 40; // accessible outside the block
  console.log("Inside v2 : "+v2);  //op-40
}
console.log("Outside v2 : "+v2);  //op-40

//            for let
let l2 = 50;
{  // same if it inside a Function
  let l2 = 40;
  let L2 = 'out'; 
  console.log("Inside l2 : "+l2);  //op-40
}
console.log("Outside l2 : "+l2);   //op-50
//console.log("let L2 = "+L2); //L2 is not defined












//            Hoisting

console.log('varHoist is :- '+varHoist);
var varHoist=30; //var support hoisting 
//because var is an global variable js interpreter can please it at the top of the program 


//console.log('hoist is '+letHoist);
//let letHoist=30; 
//let doesn't support hoisting this can make error.


console.log('hoist is '+constHoist);
const constHoist=30; //const doesn't support hoisting this can make error.
