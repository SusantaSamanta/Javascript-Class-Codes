let str = 'Hello my name is Susanta, I am a developer.';

console.log(str.search("Susanta"));
console.log(str.indexOf("Susanta")); // initially same but different...

//            why different

console.log(str.search("susanta")); //-1
console.log(str.indexOf("susanta")); //-1



console.log(str.search(/susanta/i));  // inside /susanta/ this is called reguare expression 
console.log(str.indexOf(/susanta/i)); // in indexOf reguare expression not working 