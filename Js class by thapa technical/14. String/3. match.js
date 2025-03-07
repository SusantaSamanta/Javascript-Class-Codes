let str = 'Hello my name is Susanta, I am a developer. SUSANTA SAMANTA, Susanta';

console.log(str.match("Susanta")); //array 
console.log(str.match("susanta")); // return null


///       why it different from search()


console.log(str.match(/Susanta/g)); //array[Susanta, Susanta]
console.log(str.search(/Susanta/g)); // it can't return same multiple values, only index return 


console.log(str.match(/SusAnta/gi)); // return all same value by arr. with out case Sensitive.
console.log(str.search(/SusantA/gi)); // find without case Cencitive but return index. 

