// JS scope

var text = 'outside';
function logIt(){
 console.log(text);
 var text = 'inside';
};
logIt();

// var are function scoped hence not hoisting here shows undefined because of the var text = inside ; if we comment it out and the scope will move to global to return outside

function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
// typeof a; // => ???
// typeof b; // => ???

console.log(typeof a);
console.log(typeof b);

// b hasn't been defined using a keyword so its returning the result as the input given to it i.e. here its number.
// a hasn't been assigned a value so its giving undefined.

// Basic Assignment

const name = "workattech";
function printName() {
  console.log(name);
}
printName();

// const name has global scope here hence we get the result workattech

function printName() {
  const name = "workattech";
  console.log(name);
}
console.log(name);

// here it will say name is not defined because the const name here is block scoped

let x = 5;
if (x === 5) {
  const a = x;
  console.log(a);
}
console.log(a);

// a is not defined here since its inside the function and const is block scoped.

const stringOne = "I am from the global scope";
function one() {
  const stringTwo = "I am from the outer scope";
  function two() {
    const stringThree = "worktech";
    console.log(stringThree);
    console.log(stringTwo);
    console.log(stringOne);
    console.log(stringZero);
  }
  two();
}
one();

// here string zero is not defined.