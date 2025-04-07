const employee = {
  calTax() {
    console.log("Tax rate is 10%");
  },
};

const karanArjun = {
  salary:50000,
  calTax(){
    console.log("Tax rate is 20%");
  },
};
karanArjun.__proto__ = employee;


let a = 4;
let b = 5;
console.log("a =",a,"b =",b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
try{
console.log("a+b =",a+b+c+d);//try catch to handdle the error code
}catch(err){
  console.log(err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);