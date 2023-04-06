// JS Conditionals

//Q1
// finding if a number is odd or even
// const num = 4;
// if(num % 2 === 0){
//     console.log(`${num} is even`)
// } else {
//     console.log(`${num} is odd`)
// };

// Q2
// finding if input variable is number

// const nums = 5;
// if(!isNaN(nums)){
//     console.log("number")
// }else{
//     console.log("not a number")
// }

// prints number if we put it in a form of a string its still a number because it does check type strictly.

// Q3
// checking the day program

// const day = 3;

// if(day == 1){
//     console.log("Monday")
// }else if(day == 2){
//     console.log("Tuesday")
// }else if(day == 3){
//     console.log("Wednesday")
// }else if(day == 4){
//     console.log("Thursday")
// }else if(day == 5){
//     console.log("Friday")
// }else if(day == 6){
//     console.log("Saturday")
// }else if(day == 7){
//     console.log("Sunday")
// }else{
//     console.log("Not a Weekday")
// }

// Q4.Write a program to find the number of days in a month.

// function isLeapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }

// function findDaysInMonth(month, year) {
//   if (month < 1 || month > 12) {
//     console.log(`Invalid Month of value ${month}`);
//     return;
//   }

//   if (month == 2) {
//     if (isLeapYear(year)) {
//       console.log(`This Month has 29 days`);
//     } else {
//       console.log(`This Month has 28 days`);
//     }
//   } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log(`This Month has 30 days`);
//   } else {
//     console.log(`This Month has 31 days`);
//   }
// }

// findDaysInMonth(2, 2019); 
// findDaysInMonth(6, 2017); 
// findDaysInMonth(10, 2011); 

// Q5. Write a Javascript program that takes a year from user and print whether that year is a leap year or not.

// function checkLeapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }

// checkLeapYear(1988); //"1988 is a leap year"
// checkLeapYear(2015); //"2015 is not a leap year"
