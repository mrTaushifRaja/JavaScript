let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
  console.log("button was clicked");
  console.log(evt);
  console.log(evt.type);
});

btn.addEventListener("click", ()=>{
  console.log("button was clicked - handler");
});

let div = document.querySelector("div");