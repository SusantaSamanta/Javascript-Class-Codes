// swap two variable with out third variable 
let a = 'a', b = 'b';
[b,a] = [a,b]   
console.log(a,' ',b)

// for Array

let arr = [1, 2, 3];
let second = arr[1];  // in traditional way assign value in variable;
let third = arr[2]; 
console.log(second); 
console.log(third); 

// in distructuring 

let [first,second_,third_] = arr;
console.log(first); 
console.log(second_); 
console.log(third_); 

// egnor element to assign variable 
let [, , c] = arr;
console.log(c); 




// for Object

let obj =  { name:'susanta',age:30}
let {name, age} = obj;  // give the same name as in object property. and where we don't need to maintain order mean let{age, name } = obj is same 
console.log(name,'   ',age);

///  rename 
let objec = {
  id : 'pg29',
  name : 'Susanta',
  sName : 'Samanta'
}
let { name:myName} = objec;
console.log(myName)



