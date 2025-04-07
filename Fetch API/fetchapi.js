let URL = "https://cat-fact.herokuapp.com/facts" ;

const getFacts = async()=>{
  console.log("getting data.....");
let promise = fetch(URL);
console.log(promise);
}