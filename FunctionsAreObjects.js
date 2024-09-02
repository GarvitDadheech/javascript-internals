//Diff b/w method and functions -> methods are of a class while functions are independent.

//Given a function in parameter, that returns an integer, multiply that by the second parameter, which is another integer.
const a = 10;
const b = 20;
const integer = () => {
    return a;
}
const multiply = (integer,b) => {
    return integer()*b;
}
console.log(multiply(integer,b));

