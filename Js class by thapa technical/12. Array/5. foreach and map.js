
/*                forEach() Syntex 


arrayName.forEach((currentelemet, index, array) => {
   // uses of currentelemet,index,array
})

currentelemet : this can contain each element of the array for each iteration one by one
index : this can contain each element's index of the array for each iteration.
array : contain hole array. 

* it can't return any value or copy on any other object 


Ex :
*/

arrayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday"];
arrayName[13] = "Friday";  
arrayName[20] = "Hello";  

arrayName.forEach((eachEle) => {   // currentelemet
  console.log(eachEle);  
});
arrayName.forEach((eachEle, ind) => { //currentele,index
  console.log(`${eachEle}    -    ${ind}`);  
});
arrayName.forEach((eachEle, ind, arr) => { // 3 use
  console.log(arr);     // 1 use      •••• this loop will run 7 times which is lenght of the arrrayName. 
//  console.log(ind);    // 1 use
});
let copyArray1 = arrayName.forEach((eachEle, ind) => { 
  return (`${eachEle}    -    ${ind}`);  
});
console.log('||||||||||||||||||||||||||',copyArray1); // undefined because forEach con't return any value 




/*                    map() Syntex 


arrayName.map((currentelemet, index, array) => {
   // uses of currentelemet,index,array
})

currentelemet : this can contain each element of the array for each iteration one by one
index : this can contain each element's index of the array for each iteration.
array : contain hole array. 

* it will return any value or copy valu on any other object 
* it will copy values to another arr but don't change the original arr


Ex :
*/

arrayName = ["A","B","C","D","E"];
arrayName[12] = "M";  

arrayName.map((eachEle) => {   // currentelemet
  console.log(eachEle);  
});
arrayName.map((eachEle, ind) => { //currentele,index
  console.log(`${eachEle}    -    ${ind}`);  
});
arrayName.map((eachEle, ind, arr) => { // 3 use
  console.log(arr);     // 1 use        •••• this loop will run 7 times which is lenght of the arrrayName. 
  //  console.log(ind)    // 1 use
});

console.log("example of map that return values    >>>>>>>>>>>>>>>>.."); 

let copyArray = arrayName.map((eachEle, ind) => { 
  return (`${eachEle}    -    ${ind}`);  
});
console.log(copyArray);
console.log(arrayName); // not change org array 




// another example of foreach vs map

arr = [0,1,2,3,4,5,6];
arr.forEach((num) => {
  console.log(num * 2);  
}); //only performs an action on each element 

let copyarr = arr.map((num) => {
  return (num * 2);
}); // create 
console.log(copyarr);
console.log(arr);       // not change org array 




// 
const arrr = [ 1,2,3,4,5,6,7,8,9,10,11,12];
let result3 = arrr.map((i) => {
  if( i%2 == 0)
    return i*i;
});
console.log(result3);
const result4 = result3.filter((i) => {
  if(i != undefined)
    return i;
})
console.log(result4);




let arrrr = ['Susanta', 'Suman', 'Sayan'];
const result5 = arrrr.map((i) => {
  return `Mr.${i}`;
});
console.log(result5);