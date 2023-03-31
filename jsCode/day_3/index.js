// Operators

let x = 2 ;
console.log(x + true); // value of true is 1 so result here is 3

let y = 4*"10";
console.log(y); //converts 10 to number and result is 40

let z = "z"*10; 
console.log(z); //NaN not a number

let a = (10 > 10) || (10>=10) && (true === 1) || (false == 0); // true cuz 10 > 10 false but 10 >=10 is true so first half is true and 2nd half then true === 1 is false but false == 0 is true . so one of the each part conditions are true so its true.
console.log(a);

let b = (false || true ) && (0 || 1);
console.log(b); // result here is 1 as false = 0 and true = 1

let c= 6 << 1
console.log(c)  // here left shift operator is used ; value of 6 in binary is 110 and value of 12 is made by shifting the values to place back to the left -- 0110 here 2nd place 1 comes as 1st place , 3rd place 1 comes at second place and 4th place zero comes to 3rd place and a zer0 is added at the end. and is 12 is the value of 1100 bit number

let d= 6 << 2
console.log(d) // 24

let e= 6 << 3
console.log(e) // 48

let f= 6 >> 1
console.log(f) // 3

let g= 6 >> 2
console.log(g) //1