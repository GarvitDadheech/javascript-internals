function curriedAdd(a) {
    return function(b) {
        return function(c) {
        return a+b+c;
        }
    };
}
console.log(curriedAdd(1)(2)(3));


//Modern syntax
const add = (a) => (b) => (c) => a+b+c;
console.log(curriedAdd(1)(2)(3));

function curry(fn) {
    const arity = fn.length;
    return function curried(...args) {
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return function(...rest) {
          return curried(...args, ...rest);
        };
      }
    };
  }
  
  // Usage:
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  console.log(curriedAdd(1)(2)(3)); // Returns 6
//Here, curry is a higher-order function that takes a function fn and returns a curried version of it. 
//The curried function checks if enough arguments have been provided; if not, it returns a new function that takes 
//the remaining arguments.

  