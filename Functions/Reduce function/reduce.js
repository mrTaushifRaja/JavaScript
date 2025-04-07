let arr = [1,2,3,4,5];

//0+1+2+3+4+5
const sumValue = arr.reduce((prev,val)=>{
  return prev+val;
});

console.log(sumValue); //output-15

const largeNum = arr.reduce((result,curr)=>{
  return result>curr ? result:curr;
});
console.log("Large num of the arr =",largeNum);