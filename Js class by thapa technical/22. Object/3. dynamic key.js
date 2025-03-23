
let idType = 'college'

let obj = {
  [idType] : '2024UG0029PG',
  name : 'Susanta',
  show(){
    console.log(`Hello my ${[idType]} is ${obj[idType]}`);
    console.log(`Hello my name is ${obj.name}.`);
  },
}

console.log(obj);
obj.show()



/// in this way we can able to increment the value of object 
let ob = {
  a : 0,
  b : 5,
}
ob.a++; ob.a++;
ob.b-- ; ob['b']--;
ob.c++
console.log('a :',ob.a,'b :',ob.b)

console.log(ob) // c is not a number 