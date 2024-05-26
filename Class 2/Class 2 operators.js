//          operator in JS

// 1. arithmetic 
// 2. assignment 
// 3. comparisons 
// 4. string 
// 5. logical operator 
// 6. bitwise operator
// 7. type operator

let a,b;
a= 8;
b=4;

//arithmetic operater 
//addition 
console.log('Addition of '+a+' and '+b+' is : ' ,a+b);
//subtract 
console.log(' Subtraction of '+a+' and '+b+' is : ' ,a-b);
//multiplication 
console.log(' Multiplication of '+a+' and '+b+' is : ' ,a*b);
//exponentiation (power of)
console.log(' '+a+'**'+b+' is : ' ,a ** b);

b=3;
//division 
console.log(' '+a+' / '+b+' is : ' ,a/b);
//modulus 
console.log(' '+a+' % '+b+' is : ' ,a%b);
b=4;

// post increment & decrement 
a++;
b--;
console.log('Post Increment of '+a+' is : ' ,a);
console.log('Post Decrement of '+b+' is : ' ,b);

// pre increment & decrement 
a=8;
b=4;
console.log('Pre Increment of '+a+' is : ' ,++a);
console.log('Pre Decrement of '+b+' is : ' ,--b);
a=8;
b=4;





// 2. assignment operator 

// =
let a1 = 'Susanta'
console.log('a1 = '+a1);

// +=
let a2 = 'Susanta';
a2 += ' Samanta';
console.log('a2 = '+a2);

// -=
let a3 = 13;
a3 -= 3;  // a = a - 3
console.log('a3 = '+a3);

// *=
let a4 = 10;
a4 *= a4;  // a4 = a4*a4
console.log('a4 = '+a4);

// /=
let a5 = 99;
a5 /= 10;  // a5 = a5/10
console.log('a5 = '+a5);

// %=
let a6 = 99;
a6 %= 10;  // a6 = a6%10
console.log('a6 = '+a6);

//  **=
let a7 = 5;
a7 **= 2;  // a7 = a7**2
console.log('a7 = '+a7);





// 3. comparisons operator

// equal on value 
let c1,c2;
c1 = 20;
c2 = 34;
console.log(c1+' == '+c2+' is : ',c1==c2)
let c3 = '4'; //string
let c4 = 4; // number 
console.log(c3+' == '+c4+' is : ',c3==c4)

//equal on value and type 
let c5 = '4';
let c6 = 4;
console.log(c5+' === '+c6+' is : ',c5===c6)

// not equal on value 
c1 = 20;
c2 = 34;
console.log(c1+' != '+c2+' is : ',c1!=c2)
c3 = '4'; //string
c4 = 4; // number 
console.log(c3+' != '+c4+' is : ',c3!=c4)

//not equal on value and type 
c5 = '4';
c6 = 4;
console.log(c5+' !== '+c6+' is : ',c5 !== c6)

// greater than & less than 
c5 = '5';
c6 = 4;
console.log(c5+' > '+c6+' is : ',c5 > c6)
console.log(c5+' < '+c6+' is : ',c5 < c6)

// greater than & less than equal to 
c5 = '6';
c6 = 6;
console.log(c5+' >= '+c6+' is : ',c5 >= c6)
console.log(c5+' <= '+c6+' is : ',c5 <= c6)



// 3. string operator

// string competition 
console.log('a'>'b');
console.log('b'<'c');
// ascii value a=97,b=98...


// string concatenation 

let s1 = "Susanta";
let s2 = "Samanta";
//let s3 = s1+s2;
let s3 = s1+" "+s2;
console.log('My name is '+ s3);

s3 = "Hello"
s3 += " World"
console.log(s3);



// 5. logical operator 

// logical AND &&
console.log('true && true is : ', true && true);
console.log('true && false is : ', true && false);
console.log('false && true is : ', false && true);
console.log('false && false is : ', false && false);

if( 4 < 44 && 44 < 444 ) {
  console.log('In logical AND if all condition is true then result is true.')
}

// logical OR ||
console.log('true || true is : ', true || true);
console.log('true || false is : ', true || false);
console.log('false || true is : ', false || true);
console.log('false || false is : ', false || false);

if( 4 < 44 || 44 > 444 ) {
  console.log('In logical OR if only one condition is true then result is true.')
}

//logical NOT !
console.log('!true is ', !true);
console.log('!false is ', !false);

if(!false){
console.log("If !false then the result is change to true vise versa.");
}






// bitwise operator









            
