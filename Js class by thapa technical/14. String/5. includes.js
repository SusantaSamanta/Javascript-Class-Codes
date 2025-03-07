let str = 'Hello my name is Susanta, I am a developer. SUSANTA SAMANTA, Susanta';


console.log(str.includes("Susanta"));
console.log(str.includes("Susa")); //true 
console.log(str.includes("SusA")); //false 
console.log(str.includes("h")); // false
console.log(str.includes(",")); // true
console.log(str.includes("T")); // true
console.log(str.includes("I a")); // true I am am
console.log(str.includes("I A")); // false 


console.log(str.includes(/Susanta/)); // it can't be a R.G.




