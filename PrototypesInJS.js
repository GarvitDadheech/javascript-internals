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
console.log(beta.color);