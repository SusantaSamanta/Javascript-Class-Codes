
// Syntex of splice

//  Array.splice(start, deleteCount, item1, item2,..);

let array = ["A","B","C","D","E"];
array.splice(1,2);   /// delete 1 index to 2 index 
console.log(array);  


array = ["A","B","C","D","E"];
array.splice(1,1);   /// delete 1 index to 1 index 
console.log(array);  


array = ["A","B","C","D","E"];
array.splice(1,2,'b','c');   /// delete 1 index to 2 index and add 'b', 'c' respectively 
console.log(array);  


let arr = ["A","B","C","D","E"];
console.log(arr.splice(2,2));    //form [2] to [2]&[3] delete.
arr = ["A","B","C","D","E"];
console.log(arr.splice(2,3));    //form [2] to [2]&[3]&[4] delete.
arr = ["A","B","C","D","E"];
console.log(arr.splice(2,1));    //form [2] to [2]  delete.

arr = ["A","B","C","D","E"];
arr.splice(2,0);    
console.log(arr);  // form [2] to 0 (nothing) delete.

arr = ["A","B","C","D","E"];
arr.splice(2,0,'c');    
console.log(arr);  // form [2] to 0 (nothing) delete. and add 'c' after [1].


console.log(arr.splice());   // o/p >>> [] 
                                // if inside the.splice() we don't give any parameters Then it return empty arr []


