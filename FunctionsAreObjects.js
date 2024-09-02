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

//Given an array of functions, invoke all of them sequentially, return an array with return value of each function in the same order.
function multiply(){
    return a*b;
}
function add(){
    return a+b;
}
function divide(){
    return a/b;
}
function subtract(){
    return a-b;
}
const arrayOfFuncs = [multiply,add,divide,subtract];
const resultArray = [];
for(funcs of arrayOfFuncs) {
    resultArray.push(funcs());
}
console.log(resultArray);


