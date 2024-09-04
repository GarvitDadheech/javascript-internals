//A closure is a function that remembers the environment in which it was created. 
//In other words, a closure allows a function to access variables from an outer function's scope, even after that outer function has returned.

function outerFunction() {
    let outerVariable = 'I am from the outer scope';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure(); // Output: 'I am from the outer scope'

