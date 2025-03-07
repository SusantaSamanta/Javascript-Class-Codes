 
 arr = [2,6,8,3,4,5,7,63,8];
const re = arr.filter((i) => {
  return i > 3;
})
console.log(re);


let b = 3; 
arr = [2,6,8,3,4,5,7,3,8,3,5,7,3];
const result = arr.filter((i) => {
  return i != 3;
})
console.log(result);




let c = 3; // find all 3
arr = [2,6,8,3,4,5,7,3,8,3,5,7,3,5];
const result1 = arr.filter((i) => {
  return i == c;
})
console.log(result1);




// now filter an object 


const price = [
  {name: "laptop", price:4000 },
  {name: "iphone", price:2000 },
  {name: "Dslr", price:5000 },
  {name: "display", price:3000 },
  {name: "Tv", price:8000 }
];

const filterProduct = price.filter((i) => {
  return i.price > 2000;
});

console.log(filterProduct)
