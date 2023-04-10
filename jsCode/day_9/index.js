//js WHile / Do While Loop

// basic assignments

// Q1 - What is the output?

// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 2;
// }

// output - 1, 3, 5, 7, 9

// Q2 - What is the output?

// let count = 1;
// while (count < 10) {
//  console.log(‘Hello World’);
//  count += 4; }

// error - unexpected token on console.log(‘Hello World’); the hello world string is not wrapped in proper quotes or backtick.

// Q3 -  What is the output?

//  const ourArray = [];
//  let i = 0;
//  While (i < 5 ) {
//  ourArray.push(i);
//  i++ ;
//  };
//  console.log(ourArray);

// error - js is case sensitive and while here is written with capital W which is wrong.

// Q4 - What is the output?

// let count = 0;
// do {
//  console.log(count);
//  count++;
// } while (count < 5)

// output - 0, 1, 2, 3, 4

// Q5 -  What is the output?

// let count = 3;
// do {
//  console.log(count);
//  count++;
// } while (count < 4)

// output - condition is true in very first iteration hence only 3 as output

// Q6 -  What is the output?

// const ourArray = [];
// let i = 0;
// do {
// ourArray.push(i);
// i++ ;
// } While (i < 5 );
// console.log(ourArray);

// w in while is capital hence program fails ; js is case senstive

// Q7 - WAP that makes the following pattern using console.log():
//  #
//  ##
//  ###
//  ####
//  #####
//  ######

// let string = "";
// for (let i = 1; i <= 6; i++) {
//   string += "#";
//   console.log(string);
// }

// MEDIUM ASSIGNMENT -

// Q8 - WAP to iterate from 0 to 100 and print only even numbers using while or do..while loop

// let i = 0;
// do {
// console.log(i);
// i+=2 ;
// } while (i < 101 );

// Q9 - WAP to iterate from 0 to 100 and print only odd numbers using while or do..while loop

// let i = 1;
// do {
// console.log(i);
// i+=2 ;
// } while (i < 101 );

// Q10 - WAP to print products of digits of a number

// const number = 1234;
// let product = 1;

// for (let i = 0; i < number.toString().length; i++) {
//   product *= parseInt(number.toString().charAt(i));
// }

// console.log(`Product of digits of ${number} is ${product}.`);

// Q11 - WAP to print factorials of a number.

// var number = 4;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }

// console.log(`factorial of ${number} is ${factorial}.`);

// Q12 - Missing in ppt

// Q13 - WAP to find the power of a number

// const base = 6;
// const exponent = 5;
// let result = 1;

// for (let i = 0; i < exponent; i++) {
//   result *= base;
// }

// console.log(`${base} raised to the power of ${exponent} is ${result}.`);

// Q14 - WAP to find the number of digits in a number.

// let number = 34543524545543;
// let count = 0;

// while (number > 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// console.log(`Number of digits in the input number is ${count}.`);

// Q15 -  WAP to find sum of all odd numbers between 1 to n.

// let n = 20;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// };

// console.log(`Sum of all the odd numbers between 1 and ${n} is ${sum}.`);
