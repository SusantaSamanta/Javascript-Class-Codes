
let name = 'susanta';
let sName = 'samanta';

let obj = {
  id : 'pg29',
  name : name,
  sName : sName,
}
console.log(obj.name)
console.log(obj.sName)

// if in Object key and value name is same the we write it like this
let obj2 = {
  id : 'pg',
  name,
  sName   // automatically assign value 
}
console.log(obj2.name)
console.log(obj2.sName)