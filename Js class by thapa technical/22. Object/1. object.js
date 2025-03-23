let obj = {
  id : 'pg29',
  name : 'Susanta',  // at last element (,) is optional 
}
console.log(obj);



let obj2 =  {
  id : 29,
  name : 'Susanta Samanta',
  show(){
    console.log('My name is : ', this.name);
    console.log(`My name is ${obj2.name}.`);
  },
  "is student" : true,
  obj : {  // this is an object but inside the object = not use
    nameS : 'Samanta',
  }
}
console.log(obj2);
console.log('hello',obj2.name);

//console.log('student : ',obj2."is student"); error 
console.log('student : ',obj2["is student"]); 

console.log('hello word : ',obj2[name]); // name is undefined
console.log('hello earth : ',obj2["name"]); 

obj2.show();




//         Some object methods 


let obj3 = {
  id : 'pg29',
  name : 'Susanta',
  sName : 'Samanta'
}

//              Object.keys()  
console.log(Object.keys(obj3))

//              Object.values()  
console.log(Object.values(obj3))

//              Object.entries()  
console.log(Object.entries(obj3))

//     objectName.hasOwnProperty("propertyName")  
console.log(obj3.hasOwnProperty("id"));
console.log(obj3.hasOwnProperty('name'));
console.log(obj3.hasOwnProperty('nameS')); 



// Object.assign(target, source)   {target <= source copy}

let source = {
  a : 3,
  b : 7,   // value of b is updated in h ( s => t copy)
}
let target = {
  b : 5,  
  c : 8,   
  d : 9,
}
let h = Object.assign(target, source)
console.log(h)

let sou = {
  a : 3,
  b : 5,
}
let ho = Object.assign({}, sou);
console.log(ho)


//              Object.freeze(objectName);
obj3.id = 'ug40';
console.log(obj3.id)

Object.freeze(obj3);
obj3.id = '888';  // not changed for freeze()
console.log(obj3.id)


let obj4 = {
  id : 'pg29'    /// dynamic cally add properties 
}
obj4.cLass = '3rd year';
console.log(obj4.cLass)





////////    arr vs obj >> on for(in) loop    /////////

// for in loop in Array give its index which is numerical and this index are predefined can't change,

// for in loop in Object give its key(index) which is user defined changeable,

let obj5 = {
  a : 2,
  b : 3,
}
for( i in obj5)
  console.log(i)   // give the key (one type of index)

let arr = ['a','b']
for( i in arr)
  console.log(i)   /// give the index of arr
 
 
 
  
///// Computer two objects ///////

let obje = {
  A : 1,
  B : 3,
}
let obje2 = {
  A : 1,
  B : 3,
}
let test = true;
for(i in obje){
  if(obje[i] != obje2[i]){   // obj[i] != obj2[i]
    test = false;            //  obj[A] != obj2[A]
    break;                   //      1  !=  1
  }
}
if(test)
  console.log('obje and obje2 are same');
else
  console.log('obje and obje2 are not same');


