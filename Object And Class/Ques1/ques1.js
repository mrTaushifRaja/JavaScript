/* you are creating a website for your college. create a class
user with 2 properties,name & email. it also has a method called
viewData() that allows user to view website data.*/

let DATA = "secret information";

class User {
  constructor(name,email){
    this.name = name;
    this.email = email;
  }

  viewData(){
    console.log("data =",DATA);
  }
}
  class Admin extends User{
    constructor(name,email){
    super(name,email); 
    }
    editData(){
      DATA = "some new value";
    }
}

let student1 = new User("md Taushif Raja","mdtaushifraja084@gamil.com");
let student2 = new User("sahwag raj","sahwagraj0505@gamil.com");

let teacher1 = new User("dean", "deancollege0");