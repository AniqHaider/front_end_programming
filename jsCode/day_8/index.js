// js For loops

// Q1 - What is the output?

// for (let i = 0; i <= 5; i=i+1) {
//  console.log(i);
//  console.log(i+1);
//  console.log(i-2);
//  }

// console.log(i) -- 0, 1, 2, 3, 4, 5
//console.log(i+1) -- 1, 2, 3, 4, 5, 6
// cosnole.log(i-2) -- -2, -1, 0, 1, 2, 3

//  Q2 - What is the output?

//  for (let i = 5; i > 0; --i) {
//   console.log(i);
//  }

//output -- 5, 4, 3, 2, 1

//  Q3 - What is the output?

// for (let i = 1; i < 6; i++) {
//  console.log(i + 5, i);
// }

// 6, 1; 7, 2; 8, 3; 9, 4; 10, 5

// Q4 - What is the output?

// for (let i = 1; i < 6; i++) {
//  console.log("* * * * *");
// console.log("*", "*", "*", "*", "*");
// }

// it will print console.log value 5 times

// Q5 - What is the output?

// for (let i = 1; i < 6; i++) {
//  console.log(i, i, i, i, i);
// }

// 1,1,1,1,1 ; 2,2,2,2,2 ; 3,3,3,3,3 ; 4,4,4,4,4 ; 5,5,5,5,5

// Q6- What is the output?

// for (let i = 1; i < 6;) {
//  console.log(i, i + 1, i + 2, i + 3, i + 4);
// }

// infinite loop because i increment is not given and condition stays true always

// Q7 - What is the output?

// let i =1, j, k =3, l =0;
// for (let i = 1, j = 1; j < 6; j++) {
//  console.log(i, i + 1, i + 2, i + 3, i + 4);
// }

// console.log(i, i + 1, i + 2, i + 3, i + 4); will print this 5 times -- 1,2,3,4,5

// Q8 - What is the output?

// let i = 1;
// for (let j = 1; j < 6; j++) {
//  console.log(i, i + 1, i + 2, i + 3, i + 4);
// }

// console.log(i, i + 1, i + 2, i + 3, i + 4); will print this 5 times -- 1,2,3,4,5

// Q9- What is the output?

// for (let j = 1; j < 6; j++) {
//  console.log(
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j)
//  );
// }

// A A A A A; B B B B B; C C C C C; D D D D D; E E E E E

// Q10 - What is the output?

// for (let j = 5, k = 1, l = 2, m = 3, n = 4, x = 5; j > 0; ) {
//  console.log(x, x - 1 + k, x - 2 + l, x - 3 + m, x - 4 + n);
//  j = j - 1; // BASICALLY HOW THE J DECREASES AND LOOP RUNS 5 TIMES AND IT ENDS
//  k = 0;
//  l = 0;
//  m = 0;
//  n = 0; }

//  5 5 5 5 5 ; 5 4 3 2 1 ; 5 4 3 2 1 ; 5 4 3 2 1 ; 5 4 3 2 1

// Q11- What is the output?

// for (let j = 5; j > 0; j = j - 1) {
// if (j === 5) {
//  console.log(5, 5, 5, 5, 5);
//  } else {
//  console.log(5, 4, 3, 2, 1);
//  }

// error cuz block isn't closed.

// correct code -

// for (let j = 5; j > 0; j = j - 1) {
//   if (j === 5) {
//     console.log(5, 5, 5, 5, 5);
//   } else {
//     console.log(5, 4, 3, 2, 1);
//   }
// }

// only on 1st iteration j === 5 is true so  5 5 5 5 5 is logged; then for next 4 iterations -- 5 4 3 2 1 is logged.

// Q12 - WAP to print numbers from 1 to 10 using a for loop

// for(let i=1 ; i<=10 ; i++){
//     console.log("current value of i is - " +i)
// }

// Q13 - WAP to print the sum of digits of a number

// let value = 342379;
// let sum = 0;

// for (let i = value; i > 0; i = Math.floor(i / 10)) {
//   sum += i % 10;
// }

// console.log(sum);

// Q14 - WAP to print products of digits of a number.

// let num = 342379;
// let res = 1;

// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//   res *= i % 10;
// }

// console.log(res);

// Q15 - WAP to print factorials of a number.

// const num = 10;

// let factorial = 1; 

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }

// console.log(`${factorial} is factorial of ${num}`);

// Q16 - WAP to print a 2D array























