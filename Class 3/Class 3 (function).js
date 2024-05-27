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