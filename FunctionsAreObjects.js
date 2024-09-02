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

//Given an object in input, return deep clone of the object.
const obj = {
    name: "Garvit",
    city: "Kankroli",
    state: "Rajasthan",
    hobbies: {
        hobby1: "football",
        hobby2: "geopolitics"
    }
}
const deepClone = (obj) => {
    let clone = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}
const clonedObj = deepClone(obj);
console.log(clonedObj);
obj.hobbies.hobby1 = "basketball";
console.log(clonedObj.hobbies.hobby1); //football
console.log(obj.hobbies.hobby1);//basketball

//Given an object in input, return a function that carries all the key value pairs in the input object, and returns the total number of keys in the input object when invoked. 
const countKeys = (obj) => {
    let count = 0;
    for(let key in obj) {
        if(typeof obj[key]==='object' && obj[key]!=null) {
            count += countKeys(obj[key]);
        }
        count += 1;
    }
    return count;
}
console.log(countKeys(obj));



