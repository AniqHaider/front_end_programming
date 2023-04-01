// Javascript Hoisiting

//code will throw an error
// function foo(n) {
//   if (n == 6) {
//     let num = 2;
//   }
//   console.log(num);
// }
// var n = 6;
// console.log(n);
// foo(6);
// code returns error because let is block scoped

// function soo() {
//   var n = 6;
//   console.log(n);
// }
// var n = 5;
// console.log(n);
// soo();
// the function n is 6 and outer one is 5 because var is function or global scoped.

// function parent() {
//   var hoisted = "I'm a variable";
//   function hoisted() {
//     return "I'm a function";
//   }
//   return hoisted();
// }
// console.log(parent());
// returns hoisted is not a function because it has already been declared as variable.

// alert(doo());
// function doo() {
//   var bar = function () {
//     return 3;
//   };
//   return bar();
//   var bar = function () {
//     return 8;
//   };
// }

// says alert is not defined and bar is defined twice in same function as a function and as a variable which isn't allowed.

var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();

// 1st console.log shows hoisting but value isn't accepted so it says in undefined ; 2nd console.log has the value bar assigned .