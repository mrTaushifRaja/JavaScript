class car{
  constructor(){
    console.log("creating new object"); z.   }
  start(){
    console.log("start");
  }

  stop(){
    console.log("stop");
  }
  setBrand(brand){
  this.brandName = brand;
  }
}
let fortuner = new car();  
fortuner.setBrand("fortuner");
let lexus = new car();
lexus.setBrand("lexus");