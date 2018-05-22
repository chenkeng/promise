console.log("here we go!")

let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("hello");
    }, 2000);
}).then(value => {
    console.log(value + " world !");
});

console.log("code completed !")