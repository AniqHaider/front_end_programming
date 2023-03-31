// statement declaration assigment block

var theNumber = 1;
console.group(theNumber);

var theNumber = 3;
console.group(theNumber);

// let myName = aniq;
// console.log(myName)
// doesn't work cuz aniq needs to be in ' ' or " " 


let myName = "aniq";
console.log(myName)

// let myName = "aniq"
// doesn't work because let keyword can't be used to redeclare same variable identifier

// fix
myName = "aniq";
console.log(myName);

const myAge = "23";
console.log(myAge)

// const myAge = "22";
// console.log(myAge);

// or

// myAge = 23;
// console.log(myAge)

// does not work because const value is constant and can't be reassigned

var myMark = 89;
console.log(myMark)
myMark = 23; // reassign value
console.log(myMark)
var myMark = 67; // redeclaration
console.log(myMark)

// all of them work reassign ; redeclaration 

// let myMark = 26;
// console.log(myMark)

// const myMark = 45;
// console.log(myMark)
// won't work cuz it has already been declared


// {
// console.log('the card value is ' + theCard);

// var theCard = "";  // this wont work
// }


//block scope 

function sum(a, b){
    var firstNumber = a;
    var secondNumber = b;
    var thirdNumber = firstNumber + secondNumber; // + and = are addition and assignment operator respectively
    console.log(thirdNumber)
}

// console.log(thirdNumber);    // wont work because the variable is defined inside a function block.
const k = 3;
const z = 9;
sum(k, z)

//more block and local scope
{
    // {let newOne = "well"}
    // console.log(newOne)
    // it wont work because let is locally scoped

    {var newOnes = "bananas"}
    console.log(newOnes)
    //this will work because var is block scoped

    // {const newNew = "cabbage"}
    // console.log(newNew)
    // it wont work because const is locally scoped
}


// valid names = _aniq ; $aniq ; _aniq123 ; aniq123 

// not invalid but not gernally used and advised not to -- $$aniq

// invalid names = 123aniq ; _ _aniq ; aniq--- ; an;iq ; 1$aniq 