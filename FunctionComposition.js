// It is like chaining of two functions, same we used to do like fog(x) = f(g(x))
const multiply = (a) => {
    return a*2;
}
const add = (a) => {
    return a+2;
}

const subtract = (a) => {
    return a-2;
}
const b = 4;
const composedFunction = (x) => {
    return (add(multiply(subtract(x))))
}
    

console.log(composedFunction(b)); //Output: 6

//We can also do the below for reusablility.
const compose = (...functions) => x =>
  functions.reduceRight((acc, fn) => fn(acc), x);
//compose takes a list of functions and returns a new function.
//The reduceRight method is used to apply functions from right to left. This is because compose(f, g) should be interpreted as f(g(x)), where g is applied first and then f.

const composedFunc = compose(add, multiply,subtract);
console.log(composedFunc(4)); // Output: 6
