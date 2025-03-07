let str = '123456789';
//         012345678
/*  
    slice(starringIndex to endingIndex) 
    **** index not the real position 
    if we tell about real position then =>
    slice(realStartPosition-1  to  realEndigngPosition-1)
*/


console.log(str.length);
console.log(str.slice(0, str.length)); //[0] to [9-1] => [0] to [8]


/*    index is like this => 

 real position  :   1  2  3  4  5  6  7  8  9  10
 positive index :   0  1  2  3  4  5  6  7  8  9 
 nagative index : -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
 
*/


console.log(str.slice(-6))
console.log(str.slice(-6,-2))
console.log(str.slice(-6,9))




