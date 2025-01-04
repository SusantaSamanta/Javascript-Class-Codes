
const result = function( a, b){
  let sum = a+b;
  console.log(sum)
}
result()

const result1 = function( a, b){
  let sum = a+b;
  console.log(sum)
}
result1(1) // a value given

const result2 = function( a = 10, b){ // here a have default value but not in b so we have to send the value of d in argument. 
  let sum = a+b;
  console.log(sum)
}
result2(1)   // a value give but not b
result2(1,2)  // 2 value given

const result3 = function( a, b = 10){ // here b have default value but not in a so we have to send the value of a in argument. 
  let sum = a+b;
  console.log(sum)
}
result3(1)   

const result4 = function( a = 2, b = 4){
  let sum = a+b;
  console.log(sum)
}
result4()   
result4(1)   
result4(2)   // a value given but not b
result4(0,1)





