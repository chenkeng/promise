console.log("here we go !");

let promise=new Promise(resolve=>{
    console.log("start !");
    setTimeout(() => {
        resolve("hello "); 
    }, 1000);
    
}).then(value=>{
    console.log(value);
    (function(){
        // 不是同一个栈，所以不会等待这个promise
        return new Promise(resolve=>{
            setTimeout(() => {
                console.log("before xx00")
                resolve("xxx000");
                console.log("after xx00");
                
            }, 2000);
        }) 
    })();
    return false;
}).then(value=>{
    console.log(value+" supersuper !");
    
})