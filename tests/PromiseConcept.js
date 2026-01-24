

let data=new Promise((resolve,reject)=>{
console.log("Promise started....");
let success=true;
if(success)
{
    resolve("pass");
}else{
    reject("Fail");
}

});

//call
data.then(result=>{
    console.log(result);
    
}).catch(error=>{
    console.log(error);
    
})

//error promise
let errorPromise=new Promise((resolve,reject)=>{
reject("Its error....");

})

errorPromise.catch(error=>{
    console.log(error);
    
})

console.log("------Success promise-----");

let myPromise=new Promise((resolve,reject)=>{
resolve("Its success...")
})

myPromise.then(res=>{
    console.log(res);
    
})

console.log("------------");


let p1=new Promise((resolve,reject)=>{
resolve("p1...done");
})


let p2=new Promise((resolve,reject)=>{
resolve("p2...done");
})

let p3=new Promise((resolve,reject)=>{
resolve("p3...done");
})

Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
    
})

