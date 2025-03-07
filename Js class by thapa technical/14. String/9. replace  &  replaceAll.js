let str = 'Hello my name is Susanta, I am a developer. SUSANTA SAMANTA, Susanta';


//replace method replace the first item in the string. and return new the string. original string is not change.

console.log(str.replace("my",'MY')); 

console.log(str);

console.log(str.replace('is')); // if we give only searching value then this replace by undefined.

console.log(str.replace()); // if we don't give any parenetr then this return whole string.


console.log(str.replace("my",'MY','dddddd')); // 3rd para not use

// support R.E g and i Flag 

console.log(str.replace(/susAnta/i,'Suman',)); // only first susaAnta change without case sensitive 
console.log(str.replace(/susAnta/gi,'Suman',)); // all susaAnta change without case sensitive 

 


//                replaceAll

//replaceAll method replace the all item in the string. and return new the string. original string is not change.


console.log(str.replaceAll("a",'A')); 

// it not support R.G. g & i 
//console.log(str.replaceAll(/susAnta/,'Sayan',)); // all susaAnta change without case sensitive 



