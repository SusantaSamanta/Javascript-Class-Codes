
//          for in loop in array :
  
//     this loop give index of each data which are available from an iteratable object like string array..
  
  
arrayName = ["Sunday","Monday","Tuesday","Wednesday"];
for(let day in arrayName){  //here let optional
  console.log(day)
}

console.log('');
console.log('');
console.log('');


console.log("arrayName print by for in : >>>>");
console.log("");
arrayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday"];
arrayName[13] = "Friday";  
arrayName[20] = "Hello";  
for(days in arrayName){ // 5-12 are not print
  console.log(days);
}


console.log("");
console.log("arrayName print by for of : >>>>");
console.log("");

for(day of arrayName){  // undefined values are print udefined.
  console.log(day);
}




