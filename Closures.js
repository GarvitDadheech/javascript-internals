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
  


  //Data Encapsulation Using Closures
  function counter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const myCounter = counter();
  console.log(myCounter.increment()); // 1
  console.log(myCounter.increment()); // 2
  console.log(myCounter.getCount());  // 2
  console.log(myCounter.count); // undefined (count is private)
  //In this example, count is private and can only be accessed through the functions increment, decrement, and getCount, all of which are closures.

//Implementing a Click Counter
//<button id="clickButton">Click me!</button>
//<script> 
  function createClickCounter() {
    let clickCount = 0;

    return function() {
      clickCount++;
      console.log(`Button clicked ${clickCount} times`);
    };
  }

  const clickCounter = createClickCounter();
  document.getElementById('clickButton').addEventListener('click', clickCounter);
// </script>
//In this example, clickCounter is a closure that retains access to clickCount, even after createClickCounter has finished executing.

//Debouncing: Handling Shaky Hands and Rapid Button Clicks
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
function handleClick() {
console.log('Button clicked');
}

const debouncedClickHandler = debounce(handleClick, 300);

document.getElementById('clickButton').addEventListener('click', debouncedClickHandler);

//Function Factories - Closures can be used to create functions with preset arguments or behavior.
function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = createAdder(5);
  console.log(add5(10)); // 15
  
  