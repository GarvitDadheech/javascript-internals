let counter = 0;
function getData() {
    console.log("Fetching data ",counter++);
}

function myDebounce(cb,delay) {
    let timer;
    return function(...args) {
        if(timer) {
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            cb();
        },delay)
    }
} 

const betterFunction = myDebounce(getData,1000);

//args 
//const betterFunction = myDebounce(getData, 1000);
//betterFunction(1, 2, 3);
//In this case:
//...args inside the return function(...args) will be [1, 2, 3].
//When cb(...args) is called, it effectively becomes getData(1, 2, 3).


//Throttling - Throttling ensures that a function is executed at most once every specified period.
const myThrottle = (cb,delay) => {
    return function(...args) {
        document.getElementById('button').disabled = true;
        setTimeout(() => {
            cb();
        },delay);
    }
}

const newFunc = myThrottle(() => {
    document.getElementById('button').disabled = false;
    console.log("User clicked");
},delay);
