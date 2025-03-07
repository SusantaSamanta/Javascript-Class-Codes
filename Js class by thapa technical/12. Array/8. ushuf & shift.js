
          ///    unshift example 

array = ["A","B","C","D","E"];
array.unshift('F'); 
console.log(array);  // add F at first index 
array.unshift('G','H','I','J'); 
console.log(array);  // add G first then add H Then add I Then add J => so J come in first index.

console.log(array.unshift('K')); // after adding current element return length of the array 



          ///    shift example 

arr = ["A","B","C","D","E"];
arr.shift(); 
console.log(arr);  // delete F from first index 
arr.shift('G','H','I');  // if we give any parameters that is no matter, it only delete one element from first index.
console.log(arr);

console.log(arr.shift()); // it return first index element which is deleted currently. in this case C



