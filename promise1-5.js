// console.log("here we go !");

// new Promise(resolve => {
//     console.log("step1");
//     setTimeout(() => {
//         resolve(100);
//     }, 1000);
// }).then(value => {
//     console.log(value);// 注意此处的value 是上一个promise的
//     return new Promise(resolve => {
//         console.log("step1-1");
//         setTimeout(() => {
//             resolve(110);
//         }, 1000);
//     }).then(value => {
//         console.log(value);//  注意此处的value 是最近一个promise的

//         console.log("step1-2");
//         return value;
//     }).then(value => {
//         console.log("step1-3");
//         return value;
//     });
// }).then(value => {
//     console.log(value);
//     console.log("step2");

// })


/*
* 上面的连续回调容易让人费解，建议一个promise 接一个promise 调用完再下一个
*/
console.log("***********************");

new Promise(resolve => {
    console.log("step1");
    setTimeout(() => {
        resolve(100);
    }, 1000);
}).then(value => {
    console.log(value);
    return new Promise(resolve => {
        console.log("step1-1");
        setTimeout(() => {
            resolve(110);
        }, 1000);
    })
})
    .then(value => {
        console.log(value);
        console.log("step1-2");
        return value;
    }).then(value => {
        console.log("step1-3");
        return value;
    }).then(value => {
        console.log(value);
        console.log("step2");
    })
