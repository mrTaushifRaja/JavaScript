 function functionName(msg,n){
  //parameter -> input
  console.log(msg*n);
 }

functionName("I Love JS",100); //argument


function sum(x,y){ // x and y local variables -> scope
   s = x+y;
   console.log("before return" ,x ,y  );
   return s;
}

let val = sum(55,45);
console.log(val);