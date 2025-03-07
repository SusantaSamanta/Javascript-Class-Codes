const sum = (a,b) => {
  console.log(a+b);
}
const sub = (a,b) => {
  console.log(a-b);
}
const calculator = (x,y,cal) => {
  cal(x,y);
}
calculator(3,7,sum);
calculator(8,7,sub);

// 🚫 calculator(5, 5, sum())

const mul = (i ,j) => {
  console.log(i*j);
}
const multiplication = (a, b, cal) => {
  cal(a,b)
}
multiplication(5,7,mul)  // or 👇
multiplication(5,5,(i,j) => {
  console.log(i*j);
});





/// code explenation on youtube channel : Shradha Khapra - lecture 12 Promice acync await
