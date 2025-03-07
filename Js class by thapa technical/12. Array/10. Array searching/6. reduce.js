

/* syntex :  arr.reduce(accumulator, currentElement, index, Array) => {
  
}, initiaValueOfAcumuloter);

*/

let arr = [ 1,2,3,4,5,6,7,8,9,10,11,12];
const addOfArr = arr.reduce((acu,i) => {
  return acu + i;
}, 0);

console.log(addOfArr);