
// concat

// let num1 = [1,2,3];
// let num2 = [4,5,6];

// console.log(num1.concat(num2))

// push

// let num1 = [1,2,3];
// let num2 = [4,5,6];

// let num3 = num1.push(num2);
// console.log(num1);
// console.log(num2);

// const pets = ['dogs', 'cat', 'cow', 'goat'];
// const newPets = pets.push("deer");
// console.log(newPets); // return lenght of the updated pets array
// console.log(pets) // returns updated pets array

// unshift

// const num1 = [1,2,3];
// const num2 = num1.unshift(4,5,6);
// console.log(num2) // length
// console.log(num1) // updated array

// pop

// let num1 = [1,2,3,4,10];
// console.log(num1.pop())

// shift

// let num1 = [8,2,3];
// console.log(num1)
// console.log(num1.shift()) // returns first element
// console.log(num1)

// find

// const num = [1,6,7,23,12,34,55,35,67,21,67,8,9,78];
// const find = num.find(element => element > 10) // a arrow function basically ( use here as a text function; and element is written element for convenient it can be named anything its a parameter or simply said a variable defined by us )
// console.log("first number to be greater than 10 in the given array is ===> " + find)

// findIndex

// const num = [1,6,7,23,12,34,55,35,67,21,67,8,9,78];
// const index = num.findIndex(element => element > 10) // a arrow function basically ( use here as a text function )
// console.log("first number to be greater than 10 in the given array's index is ===> " + index)

// every - if all pass then true

// const num = [19,2,4,5,8,1,10,18];
// const allPassTheTest = num.every(element => element < 20);
// console.log(allPassTheTest) //returns true because all the elements in the array are smaller than 20.

// some -if any particular one passes test it returns true

// const num = [19,2,4,5,8,1,10,18];
// const allPassTheTest = num.some(element => element % 3 === 0);
// console.log(allPassTheTest)

// join

// const num = [1, 2, 3, 4];
// console.log(num.join()); // returns a string 1,2,3,4
// console.log(num.join("-")); // return 1-2-3-4
// console.log(num.join("")); // returns 1234

// includes - true / fasle

// const num = [1, 2, 3, 4];
// console.log(num.includes(4)) //true
// console.log(num.includes(5)) //false

// reverse - reverses the array

// const num = [1, 2, 3, 4];
// console.log(num.reverse()) // [4, 3, 2, 1]


// for each -- works on all elements of the array

// const num = [1, 2, 3, 4];
// num.forEach(element => console.log(element));

// const num = [1, 2, 3, 4];
// num.forEach(element => console.log(element*2));

// const num = [1, 2, 3, 4];
// num.forEach(element => console.log(element>3)); // false false false true


// map - creates a new array with the result

// const num = [1, 2, 3, 4];
// const map1 = num.map(z => z*3);
// console.log(map1) // [3, 6, 9, 12]

// filter - returns new array which satisfy the given consition

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// const bigWords = words.filter(z => z.length > 7)
// console.log(bigWords)


