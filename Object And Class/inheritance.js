class person{
  constructor(){
    console.log("enter parent constructor");
    this.species = "homo spiens";
  }

  eat(){
    console.log("eat");
  }

  sleep(){
    console.log("sleep");
  }

  work(){//parent & child have same method child'S method will be used;
    console.log("do nothing");
  }
}

class engineer extends person{
  constructor(branch){
    console.log("enter child constructor");
    super();//to invoke parent class constructor
    this.branch = branch;
    console.log("exist child constructor");
  }
  work(){
    console.log("problem solving,build something and creative thing!");
  }
}

class doctor extends person{
  work(){
    console.log("teat patients!");
  }
}

let taushifonj = new engineer("chemical engineer!");