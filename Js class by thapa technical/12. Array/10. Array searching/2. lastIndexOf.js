/*
lastIndexOf methdod return the last index at which a given element can be found in th the array. or return -1 if given element is not present.


syntex :  lastIndexOf(searchElement);
          lastIndexOf(searchElement, fromIndex)
               fromIndex mean 0 to from which index  you want to find the element.
 
*/


let arr = [2, 3, 3, 2, 3, 5, 6, 2, 7, 8, 9];

console.log(arr.lastIndexOf(2)); // in arr 2 present at index [0] , [6] it return 6 (last)

console.log(arr.lastIndexOf(2,5)); // from [0] to [5] index 2 present in [0] & [3] index so it return 3

