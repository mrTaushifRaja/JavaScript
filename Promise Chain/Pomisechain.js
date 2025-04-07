function asyncFunc1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("some data");
    },2000);
    resolve("some message success");
  });
}

function asyncFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("some data");
    },2000);
    resolve("some message success");
  });
}

// Promise chain 
console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res)=>{  //after fulfilled used this function
  console.log("fetching data.....");
  let p2 = asyncFunc2();
p2.then((res)=>{});  //after fulfilled used this function
});