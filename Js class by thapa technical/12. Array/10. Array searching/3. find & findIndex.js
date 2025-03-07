 
 
 arr = [2,6,8,3,4,5,7,63,8]

const re = arr.find((currentEle) => {
  return currentEle > 10;
})

console.log(re);





const result = arr.findIndex((currentEle) => {
  return currentEle > 10;
})

console.log(result);
