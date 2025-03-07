/*
                push() in array

push method add one or more elements at the end of the array. where original array change into new updated value.

* * push method return the length of the array at this time when push method call. explain below.

Syntex : arrayName.push(element_which_want_to_push);

Ex : 
*/


 // push modifies the original array by adding the last element. Ex : 
array = ["A","B","C","D","E"];
array.push('F'); 
console.log(array); 
array.push('G'); 
console.log(array);






arrayName = ["A","B","C","D","E"];
arrayName.push('F'); 
console.log(arrayName);
arrayName[12] = "M";  
arrayName.push('H'); 
console.log(arrayName);  // she the output 
arrayName.push('Q'); 
arrayName[16] = "X"; 
arrayName.push('WXY','Z'); 
console.log("Return length of the value after pushing 19 & 20 : ",arrayName.push('19','20'))  /// length is 21
arrayName.push('40'); // length 21+1
console.log(arrayName.length);  // length 22


// the value return by push method 

let arr = ['0','1','2','3','4','5','6']
arr[7] = '7'
arr.push('8')
console.log(arr);
console.log(arr.push('9','10')); // in this time push return the length of the array 
console.log(arr.push('11')); //



