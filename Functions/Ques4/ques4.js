/* Take a number n as input from user. create an array
of numbers from 1 to n. use the reduce method to calculate sum
of all nubers in the array.
use the reduce method to calculate product of all numbers in the array.*/

let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i<=n; i++){
  arr[i-1] = i;  //1[0],2[1],3[2],4[3]
}
console.log(arr);

let arrNew = arr.reduce((prev,val)=>{
  return prev+val;  //sum of user input arr all the element
});
console.log("sum =",arrNew);


let productArr = arr.reduce((prev,val)=>{
  return prev*val;
});
console.log("multiplication =",productArr);