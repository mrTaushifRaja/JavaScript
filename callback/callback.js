function sum(a,b){
  console.log(a+b);
}
function calculator(a,b,sumCallback){
  sumCallback(a,b);
}
calculator(4,5,sum);