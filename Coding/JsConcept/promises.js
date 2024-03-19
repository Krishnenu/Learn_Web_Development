const { resolve } = require("path");

// console.log(new Promise(resolve=>setTimeout(()=>console.log("hii"),1000)));
const promises = [];

for (let i = 0; i < 3; i++) { 
    promises.push(Promise.reject(i));
    promises.push(Promise.resolve(i));


}


const promiseAllSettled = (promiseList) => {
    return new Promise((resolve, reject) => {
      const resultList = [];
      promiseList.forEach((promise, index) => {
        console.log(promise)
        if(promise === '')
        promise.then((response) => {
          resultList.push(response);
        });
        promise.catch((reason) => {
          resultList.push(reason);
        });
        if (index === promiseList.length - 1) {
          resolve(resultList);
        }
      });
    });
  };

promiseAllSettled(promises).catch((res)=>console.log("error"));

