

let myPromise=new Promise((resolve,reject)=>{
    console.log("Promise started....");
    let status=true;

    if(status)
    {
        resolve("status is true")
    }else{
        reject("status is false");
    }
    
})

//call
myPromise.then(result=>{
    console.log(result);
    
}).catch(error=>{
    console.log(error);
    
})

console.log("-------pass promise----");
let testPromise=new Promise((resolve,reject)=>{
resolve("This is resolve promise")
})

testPromise.then(result=>{
    console.log(result);
    
})
console.log("-------Fail promise----");

let testP=new Promise((resolev,reject)=>{
    reject("This is reject promise");
})

testP.catch(error=>{
    console.log(error);
    
})

console.log("--------");

let p1=new Promise((resolve,reject)=>{
resolve('p1 is done!');
})

let p2=new Promise((resolve,reject)=>{
resolve('p2 is done!');
})
let p3=new Promise((resolve,reject)=>{
resolve('p3 is done!');
})


Promise.all([p1,p2,p3]).then(result=>{
    console.log(result);
    console.log("All promise settled");
    
    
}).catch(error=>{
    console.log(error);
    console.log("Any promise rejects...");
    
    
}).finally(()=>{
    console.log("Lets have party");
    
})

console.log("-----promise.race()------");
let p11=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve('p1 is done!');
    },2000)

})

let p22=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve('p2 is done!');
    },3000)

})
let p33=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve('p3 is done!');
    },1000)

})

Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
    
}).catch(error=>{
    console.log(error);
})
