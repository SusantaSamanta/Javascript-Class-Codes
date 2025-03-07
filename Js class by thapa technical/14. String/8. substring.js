let str = '123456789';
//         012345678


console.log(str.length);
console.log(str.substring(0, str.length)); //[0] to [9-1] => [0] to [8]


// in substring (-something) is print whole string.


console.log(str.substring(-6))
console.log(str.substring(-6,-2)) // -,- print empty string 
console.log(str.substring(-6,9)) // -,+ print whole string 
