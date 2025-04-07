let num = [1,2,3,4,6,7,8,44,7];

let evenArr = num.filter((val)=>{
  return val%2===0;
});
console.log(evenArr);

let oddArr = num.filter((val)=>{
  return val%2!==0;
});
console.log(oddArr);