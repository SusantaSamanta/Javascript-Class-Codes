let str = 'Hello my name is Susanta, I am a developer. SUSANTA SAMANTA, Susanta';



///       why it different from match()

console.log(str.matchAll("susanta")); // return empty Iterator if no match 
console.log(str.matchAll("Susanta")); // after matching return empty Iterator if match 

let temp = str.matchAll("Susanta"); // it return /Susanta/g  (R.E. with global flag) by default but 
console.log(...temp); // by help of ... "saprede operator" we it get output 

console.log(str.matchAll(/Susanta/g)); // it return array[Susanta, Susanta] this but to use we have (...)
console.log(str.match(/Susanta/g)); //array[Susanta, Susanta]


console.log(str.matchAll(/SusAnta/gi)); // also give emplty itaretor 
let  result = str.matchAll(/SusAnta/gi);
console.log(... result); 
console.log(str.match(/SusantA/gi)); // find without case Sensitive but return this values inside an array. 



let res = Array.from(str.matchAll(/SusantA/gi));
// if we want to access each arr inside result then
for(let i of res){
  console.log(i[0]);
}









