

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
