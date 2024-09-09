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
user.print();

