let name = 'Susanta';
let arr = Array.from(name);
console.log(arr);

let result = arr.map((item,i) =>{
  return `${item} - ${i}`
});
console.log(result);

