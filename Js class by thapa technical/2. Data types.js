
//  null vs undefined 
var a = "null";
console.log(a) // nall

var b;
console.log(b) // undefined => uninitiated value or absence of value 

// string 
var str = "Inside quot any thing is string";
console.log(str);

var num = 3566;  // number without Quotation
console.log(num);

num = '46747';
console.log(+num);  // this how string => num

num = '678fttty';
console.log(+num);  // NaN => not a number 



// Type of operator in java script 

console.log(typeof 89);

str = "Hello";
console.log(typeof str);
num = 678
console.log(typeof num);
num = false 
console.log(typeof num);
num = null
console.log(typeof num);

str = '56778'
console.log(typeof str);
console.log(typeof +str);  //  take as number 

str= '3636'
console.log(Number(str))   //  take as number 
console.log(typeof Number(str))



            
            // in similar way 
            
num = 5688
console.log(typeof (num + "")) // take as string.  it happened for string concatenation => 77+'' that is string 
console.log(typeof String(str))

let arr = [78,5];
if(true && 9 && 'h' && arr[0,1]) // any non zero number , non empty string => 'g' , non empty non zero object, array   => consider as true 
  console.log('true condition')
else 
  console.log(false)


let arra = [], array = [5,7,0];
if(false || 0 || '' || null || undefined || NaN || arra[0] || array[3] ) // zero , empty string => '' , zero or empty object, array   => consider as false
  console.log(true)
else 
  console.log('false condition')



if ( NaN == NaN ) // it look like equal bu in reality two or more NaN are not equal 
  console.log(true)
else 
  console.log(false)
  
if(undefined == undefined) // it true 
  console.log(true)
  
  
  
  
  
  //          parse int float
  
  num = 786.678
  num1 = parseInt(num) // convert to integer
  console.log(num1)
  num1 = parseFloat(num)
  console.log(num1)
 
 
  num = '1234&ty8'
  num1 = parseInt(num) // convert to integer
  console.log(num1)
  num1 = parseFloat(num) // convert to float
  console.log(num1)
  
  console.log(parseInt('005667h7854'))
  console.log(parseInt('m67'))
  console.log(parseInt('#679'))
  console.log(parseInt('tty'))
  
  console.log(isNaN('8i'))
  console.log(isNaN('8'))
  
  
  console.log(75-'65'-'4')
  console.log(7*'6')
  console.log('6'-3)
  
  console.log(15+'65'+5)
  console.log(15+parseInt('65'))
  
  num = ' '+8
  console.log(typeof num)
  
  num = 'hg'+8
  console.log(num)
  
  num = 'hello '+'world'
  console.log(num)
  num = 'hello '-'world'
  console.log(num)
  
            // question 
  console.log("45"+30+30) //'45'+30 => '4530'+30 => '453030' 
  console.log(30+30+'45')
  
  
  console.log(true + true)  // 1+1
  console.log(false - true)  // 0-1
  
  
  
  
  
  
  
 