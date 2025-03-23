

// alon 'this' keyword reference to the global object.
console.log(this);


// in a function. this reference to the global object.

function fun(){
  console.log(this); // window property 
}
fun();




//  in object this use for it's properties 
let obj = {
  id : 'pg29',
  name : 'Susanta', 
  fun() {
    console.log(this)    // only this type of function's 'this' give the properties of object. not on flat arrow Fun 
    console.log(this.id)
  }
}
obj.fun();

let obje = {
  id : 'pg29',
  name : 'Susanta', 
  fuN: () => {
    console.log(this)    //not on flat arrow Fun . this return window object(global).
  }
}
obje.fuN();