/* create a new button element.give it a text me "clock me", background
color of red & text cokor of white*/
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(newBtn);




