// All datatypes, functions, etc. in js are objects at the end and all of them have a property prototype.
// Object is on the top of the chain.

function createUser(username,score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.print = function() {
    console.log(this.username);
}

//const user = createUser("Garvit",20);
//the above code will give error as we are not using the new keyword.
// so new keyword tells the functions that there is a method in createUser, so new keyword knows 
// the new keyword initiates the new object and then newly created object gets linked with prototype property of constructor function.
// this means that now it has access to properties and methods defined on constructor's prototype.
const user = new createUser("Garvit",20);
// user.print();

// user.increment();
// console.log(user.score);

// Creating prototype in Object
Object.prototype.hello = function() {
    console.log("Garvit says Hello!");
}

let states = {
    Rajasthan: "Largest",
    Goa: "Smallest"
}

let arr = [1,2,3];

// arr.hello();
// states.hello();

//so if we assign a prototype of Object then it assigns to all the objects that are present in JavaScript,
// as object class is on top of the chain.

Array.prototype.hii = function() {
    console.log("Garvit says HIII!");
}

// arr.hii();
//states.hii(); -> this will give error as siblings do not share the prototypes with each other.

//Inheritance using prototype
const papa = {
    name: "parent",
    age: "36",
    color: "black"
}
const beta = {
    name :"child",
    age: "11",
    __proto__ : papa
}
// beta inherits the color from papa, even tho color of beta is not defined.
// console.log(beta.color);

//__proto__ is an old syntax.


const beti = {
    name: "child2",
    age: "9"
}
// below is a newer syntax which does the same thing under the hood.
Object.setPrototypeOf(beti,papa);
// console.log(beti.color);

// Making some custom methods now.
//String should have method of removing all spaces from front and back & then return the length of String.

String.prototype.getRealLength = function() {
    return (this.trim().length);
}
console.log("    Garvit     ".getRealLength());

function beget(obj) {
    // Write your code here
    const help = function() {
    }
    help.__proto__ = obj;
    return help;
}
const parentObject = { a: 1, b: 2 };
const childObject = beget(parentObject);

console.log(childObject.a);
console.log(childObject.b);
console.log(childObject.hasOwnProperty('a'));

Number.prototype.integer = function() {
    console.log(this);
};

// (3.33).integer()
// when we do this then we get in console [Number: 3.33] and if we only want to print value of number then we can do this.valueOf()
//Primitive Wrapper Objects: In JavaScript, primitive types like numbers, strings, and booleans are 
//automatically wrapped in their object equivalents when methods are called on them.
