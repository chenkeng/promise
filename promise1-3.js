console.log("here we go !");

let promise=new Promise(resolve=>{
    setTimeout(function(){
        console.log("the promise fullfild");
        
        resolve("hello superhan!")
    },1000);
});

setTimeout(() => {
    promise.then(value=>{
        console.log(value);
    })
}, 2000);
