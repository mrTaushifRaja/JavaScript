const getPromise =()=>{
 return new Promise((resolve,reject)=>{
    console.log("I am a Promise");
   // resolve("success");
   reject("error")
  });
};

let Promise = getPromise();
Promise.then((res)=>{
  console.log("promise fulfilled",res);
});

Promise.catch((err)=>{
  console.log("rejected",err);
})






/*let promise = new promise((resolve,reject)=>{
  console.log("i am a promise for 💕💕");
  resolve("success");
});

function getData(dataId,getNextId){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
      if(getNextId){
        getNextId();
      }
    },5000);
  });
}*/