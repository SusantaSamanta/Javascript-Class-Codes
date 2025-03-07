// array

arrayName = ["suman","susanta","sayan","sonu"];
console.log(arrayName);
console.log(arrayName[0]);
console.log(arrayName[3]);
console.log(arrayName['suman']); // undefined 

console.log(typeof arrayName);

// Create an array using array constructor 

                
let car = new Array("BMW","TATA","HANDA","AUDY");
        //      ^   this Array is important we can't use another name here 
console.log(car);


// Array literal

let arr = ["BMW","TATA","HANDA","AUDY"];
console.log(arr);

arr[1] = "BMW";
arr[0] = "TATA";
arr[2] = arr[3];
console.log(arr);
arr[5] = arr[3];  

console.log(arr[5]);

console.log(arr[4]);    // 4 not print it is undefined





