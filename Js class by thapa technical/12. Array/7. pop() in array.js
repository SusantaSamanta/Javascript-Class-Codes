/*
                pop() in array

pop method remove only one elements at the end of the array. where original array change into new updated value.
• if we give one or more argument in the pop method this are do nothing. it remove only last element if we give any argument or not

* * push method return the element which is pop when pop  method call. explain below.

Syntex : arrayName.pop(); 

Ex : 

*/

// pop modifies the original array by removing the last element. Ex : 
arrayName = ["A","B","C","D","E"];
arrayName.pop(); 
console.log(arrayName); // in below pop is also working in this console. because Each pop() changes the original array, so each console.log will show the result of all pop() calls up to that point.
arrayName.pop(); 
console.log(arrayName);


// the value return by pop method 

let arr = ['A','B','C','D','F','G','H']
arr[7] = 'I'
arr.pop() // remove I
console.log(arr);
console.log(arr.pop()); // in this time push return the content which is pop of the array // return: H
console.log(arr.pop()); // return: G
arr.pop("D"); // if we give the value inside pop, pop is not remove this value, it only remove the last value of the array. 
console.log(arr);



