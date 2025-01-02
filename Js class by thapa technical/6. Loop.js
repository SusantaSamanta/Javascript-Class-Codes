// for( initializer; condition; iteration){
// }
for(let i = 0; i<10; i++){
  console.log(i+1)
}


// while(condition){
  // code will execute if condition satisfied 
//}

//do{
    //code will execute atlist once if condition not satisfied
//} while (condition);

var num = 5
do{
  num = prompt("Enter a positive number");
}while(isNaN(num) || num < 0)
console.log(num+' is an positive number.')


// infinity   loop for(;;){  
  //            console.log('hi')
//            }