let str = 'ABCDEFabcdef';


console.log(str.charAt('d')); // int value needed mean we give index on side parameter. if we not give index, then it return the value of first index [0]  
console.log(str.charAt()); // if we don't give any parameter. return the value of [0] 

console.log(str.charAt(4)); // it return index [4] value 
console.log(str.charAt(8)); // it return index [8] value 
console.log(str.charAt(50));  // it empty string  if in the given index value is not present 
console.log(str.charAt(-5));  // it empty string in - value 





///               charCodeAt()

console.log(str.charCodeAt('h'));  // int value needed mean we give index on side parameter. if we not give index, then it return the ASCII value of first index[0] character .
console.log(str.charCodeAt('7'));  // ascii of [7] that is b

console.log(str.charCodeAt(2));  // ascii of [2] that is C

console.log(str.charCodeAt());  // ascii of [0] that is A


///               String.fromCharCode()

console.log(String.fromCharCode(65));

let strAdd = '';

for(i = 65; i<= 90; i++){
  strAdd = strAdd + String.fromCharCode(i);
}
console.log(strAdd)