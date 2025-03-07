/*

indexOf methdod return the first index at which a given element can be found in th the array. or return -1 if given element is not present.


syntex :  indexOf(searchElement);
          indexOf(searchElement, fromIndex)
               fromIndex mean from which index to end index you want to find the element.
 
*/

let arr = [ 2, 3, 1, 4, 6, 8, 5, 9];
console.log(arr.indexOf(5));
console.log(arr.indexOf(15));


console.log(arr.indexOf(3,1));
console.log(arr.indexOf(4,3));
console.log(arr.indexOf(8,4)); // [5] == 8
console.log(arr.indexOf(1,3));



