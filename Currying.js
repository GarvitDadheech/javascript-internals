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