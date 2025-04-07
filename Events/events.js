let btn = document.querySelector("#btn");
btn.click = (evt) =>{
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY)
  console.log("btn was clicked");

} 
let div = document.querySelector("div");
div.onmouseover = () =>{
  console.log("you are inside div");
}