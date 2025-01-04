
// type 1 
function winSymbolFind(a){ // fun declear with parameter 
  if(a == 'X')
    console.log('X win')
  else
    console.log('Y win')
}

winSymbolFind('X') // function call with arguments



//        Function expressions 
var result = function add( a, b){
  var c = a + b 
}
console.log(result(4,6))

var result = function add( a, b){
  var c = a + b 
  return c  //this valu is assigned into result
}
console.log(result(4,6))




//    Anonymous function 

//       means function with out name     

var fun = function (a, b){
  var c = a + b 
  return c  //this valu is assigned into result
}
console.log(fun(5,6))

function hi(){
}




// immediately invoked function IIFE



// before any IIFE ";" is mast on any thing (not in function body that is {})
(function(){
  console.log("IIFE")
})();  // before any IIFE ";" is mast
(function(a){
  console.log("Susanta "+a);
})("Samanta")

