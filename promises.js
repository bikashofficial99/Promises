 const promiseOne = new Promise(function(resolve , reject){
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)
 })

 promiseOne.then(function(){
    console.log("Promise consumed");
 })

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000);
 }).then(function(){
    console.log("Async 2 resolved");
 })

 const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Biku",email:"bikash.acvharya614@gmail.com"})
    },1000)
 })
 promise3.then(function(user){
console.log(user)
 })