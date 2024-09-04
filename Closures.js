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

  //Scope refers to the visibility or accessibility of variables within a program. JavaScript has three types of scope:
  //Global(globally available), functional(in functions), block(if-else,etc.)


  //Context refers to the value of this within a function, which depends on how the function is called. 
  //The this keyword refers to the object that is currently executing the code.
  const person = {
    name: 'John',
    sayName: function() {
      console.log(this.name);
    }
  };
  
  person.sayName(); // Output: John
  