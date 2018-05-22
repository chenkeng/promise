console.log("here we go !");

let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("hello ");
    }, 2000);
}).then(value => {
    console.log(value);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(" superhan !");
        }, 2000)
    })
}).then(value => {
    console.log("hello" + value + " world !");
})