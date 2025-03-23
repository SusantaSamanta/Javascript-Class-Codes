let obj = {
    name: 'Suman',
}

let ob = {};
let obj2 = Object.assign(ob, obj);  // another way 
obj2.name = 'Chotu';

console.log('original : ', obj); // here originL VALUE IS NOT CHANGE 
console.log('Duplicate : ', obj2);
console.log('Duplicate : ', ob);

