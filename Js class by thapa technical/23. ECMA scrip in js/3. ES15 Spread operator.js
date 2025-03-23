// copy Array

let arr = [1, 2, 3];
let arrr = [...arr];   // also same let arrr = arr; 
console.log(arrr);


//   concatinenate an Array
arr = [1, 2, 3];
arrr = [3, 4, 5, 6];
let arrrr = [...arr, ...arrr]
console.log(arrrr);

//   concatinenate an object
let obj = { a:1, b:2, c:3};
let obj2 = { c:1, d:4, e:8}; // c value update
console.log({...obj, ...obj2});



///  in string 

let name =  'Susanta';
console.log(name.split("")); // normal 


console.log([...name]);   // new way 



function show (...nums){
  console.log(typeof nums);  // array object 
  for(i of nums)
    console.log(i);
}
show(1,2,3,4,'5');
