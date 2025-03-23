// padStart 

// for string 
let n = '9'
let h = n.padStart(3, '0');
console.log(h)

// for number 
n = 9
h = String(n).padStart(3, 0);
console.log(h)
console.log(parseInt(h))


//padEnd
n = 'Susanta'
console.log(n.padEnd(10, 0));
console.log(n.padEnd(8, 0));
console.log(n.padEnd(6, 0));
