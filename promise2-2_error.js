console.log("here we go !");

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("bye-bye-superhan !");
        // throw Error("by error")
    }, 2000);
}).then(value => {
    console.log(value + " world !");
}, error => {
    console.log("Error : ", error);
})

/*
** 
**
*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        throw Error("by error")
    }, 2000);
}).then(value => {
    console.log(value + " world !");
}, error => {
    console.log("Error : ", error);
})