//            function in js


// Normal function 
function show(){
  console.log("Hello"+" "+"Susanta"+".");
}
show();

// parameterized function 
function show1(name){
  console.log("Hello"+" "+name+".");
}
show1('Ram');
show1('Sujoy');
show1();  // use default parameter 

// default parameter
function show2(name="world"){
  console.log("Hello"+" "+name+".");
}
show2('Suman');
show2();
show2('Pritam');

// multiple parameter
function add(a,b){
  let c=a+b;
  console.log("Sum of "+a+" and "+b+" is : ",c)
}
add(30,7);



//function overriding 



function add2(a,b){
  let c=a+b;
  console.log("Sum of "+a+" and "+b+" is : ",c)
}
function add2(a,b,d){
  let c=a+b+d;
  console.log("Sum of "+a+" and "+b+" is : ",c)
}
add2(5,7) // always call last updated function
// add2(5,7,d=undefined) so 5+7+undefined=NaN
add2(6,8,3) //always call last updated function
// add2(6,8,3) => 17
                 // an other example 
function add3(a,b){
  c = a + b;
  console.log("Sum of "+a+" and "+b+" is : ",c)
}
function add3(a,b,c,d){
  e = a + b +c +d;
  console.log("Sum of "+a+" , "+b+" , " +c+" and "+d+" is : ",e)
}
add3(23,6,8,3);
add3(3,8)




//anynomous function 



let add4 = function(a,b){
  c = a + b;
  console.log("Sum of "+a+" and "+b+" is : ",c);
}
add4(6,6);

let add5 = function(a,b){
  c = a + b;
  console.log("Sum of "+a+" and "+b+" is : ",c);
}
//we use add5 function or variable. if use both make error 
//add5 = add5 + 8;  
add5(8,8);     
// for this reason we use const variable.



// arrow function 



const show3 = (name) => name
//          parameter   return 
console.log(show3("Hello "+"Susanta"));  // concatenation of string pass as parameter 
console.log("Wellcome "+show3("Susanta"));

const show4 = (name) => console.log("Good "+name);
show4("Ahin"); // fun call with argument 

const evenCheck = (n) => {
  if(n%2 == 0)
    return true;
  else
    return false;
}
const even = (e, copynum) => {
  if(true == e)
    console.log(copynum+" is an even number.")
  else
    console.log(copynum+" is an odd number.")
}
let num = 7;
even(evenCheck(num),num);
num = 10;
even(evenCheck(num),num);



let n,i=0,len,copystr="";
const fastupper = (str) => {
  n = str.length
  for(i=0;i<n;i++){
    if(i==0)
      copystr += str[i].toUpperCase()
    else if(" " ==str[i]){
      copystr += str[i] = " "
      copystr += str[i+1].toUpperCase()
      i=i+1
    }
    else
      copystr += str[i].toLowerCase()
  }
}
fastupper('hElLo sUSAnta sAmAnta')
console.log(copystr)

//            Sentence editing 

const alphabet = (a) =>{
  if(  a =='a' || a=='b' || a == 'c' || a =='d' || a=='e' || a == 'f' || a =='g' || a=='h' || a == 'i' || a =='j' || a=='k' || a == 'l' || a =='p' || a=='q' || a == 'r' || a =='s' || a=='t' || a == 'u' || a =='v' || a=='w' || a == 'x' || a =='y' || a == 'z' || a =='A' || a=='B' || a == 'C' || a =='D' || a=='E' || a == 'F' || a =='G' || a=='H' || a == 'I' || a =='J' || a=='K' || a == 'L' || a =='P' || a=='Q' || a == 'R' || a =='S' || a=='T' || a == 'U' || a =='V' || a=='W' || a == 'X' || a =='Y' || a == 'Z')
   return true
   else
   return false 
}
let copystr2="";
const fastupper2 = (str) => {
  n = str.length
  for(i=0;i<n;i++){
    if(i==0)
      copystr2 += str[i].toUpperCase()
    else if("<" ==str[i]){
      copystr2 += str[i] = " "
      copystr2 += str[i+1].toUpperCase()
      i=i+1
    }
    else if("." ==str[i] && alphabet(str[i+1]) ){
      copystr2 += str[i] = ". "
      copystr2 += str[i+1].toUpperCase()
      i=i+1
    }
    else if("." ==str[i] && " " == str[i+1]){
      copystr2 += str[i] = ". "
      copystr2 += str[i+2].toUpperCase()
      i=i+2
    }
    else
      copystr2 += str[i].toLowerCase()
  }
}
fastupper2('hElLo <sUSAnta <sAmAnta. weLcome tO our weBsiTe. thankS for visiting ouR WebSite.wE always Help yoU.')
console.log(copystr2)



// higher order function 



const upper = function (s){   //anynomous
  return s.toUpperCase()
}
const lower = (s) => s.toLowerCase() //arr

const converter = function ( s, fun){
   return fun(s)   //  s contain string as args and fun contain function name as args like 》lower("susa")
}
let inputStr = "sUsaNtA SamaNTa"
inputStr = "sUsaNtA SamaNTa"
console.log(converter(inputStr, upper));
console.log(converter(inputStr, lower));



// immediately invoked function IIFE



// before any IIFE ";" is mast (not in function)
(function(){
  console.log("IIFE")
})();  // before any IIFE ";" is mast
(function(a){
  console.log("Susanta "+a);
})("Samanta")




//    setTimeout function 



const Time = () => console.log("Hello")
setTimeout(Time,2000)
setTimeout(Time,2500)
setTimeout(Time,3000)

const Time1 = (a,b) => console.log(a+b)
setTimeout(() => Time1(3,8),3500) // to send arguments we have to follow this rules 

setTimeout(() => {
console.log("After 4 second")
},4000)



//      setInterval function 



const Time3= () => console.log("after 5s")
setInterval(Time3,5000) // continuously call after 5 second.
setInterval( () => {
  console.log("after 5.5s")
},5500)



//      Function hosting 



//show6() // this make error because no function in js function doesn't call before initialisation except normal function 
const show6 = () => {
  console.log("Show6 function call")
}
show6() // we can call function after initialisation
  
show7()  // this can't make error because this is normal function 
function show7() {
  console.log("Show7 function call")
}
  







