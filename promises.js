const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Biku", email: "bikash.acvharya614@gmail.com" });
  }, 1000);
});
promise3.then(function (user) {
  console.log(user);
});
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Bikash", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "245" });
    } else {
      reject("ERROR: Something js went wrongg");
    }
  }, 1000);
});
async function consumepromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromise5();

async function getallusers(){
    try {
        const response = await fetch('https://api.github.com/users/bikashofficial99')
        const data = await response.json()
        console.log(data)   
    } catch (error) {
        console.log(error)
    }
    
}
getallusers()

fetch('https://api.github.com/users/bikashofficial99')
.then((response) =>{
return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))
getallusers()

fetch('https://api.github.com/users/bikashofficial99')
.then((response) =>{
return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))