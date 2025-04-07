console.log("one");
console.log("two");
console.log("three");
console.log("four");  //synchronous 

console.log("five");
console.log("six");// Asynchronous  
setTimeout(()=>{
  console.log("hello");
},4000);  //timeout
console.log("seven");
console.log("eight");
