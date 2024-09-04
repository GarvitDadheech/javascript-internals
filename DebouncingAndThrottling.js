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