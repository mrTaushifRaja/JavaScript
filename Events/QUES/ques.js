/* create a toggle button that changes the screento dark-mode
when clicked & light-mode when clicked again.*/

let modebtn = document.querySelector("#mode");
let currMode = "light"; //dark

modebtn.addEventListener("click",()=>{
  if(currMode ==="light"){
    currMode = "dark";
    document.querySelector("body").stylebackgroundcolor = "black";
  } else{
    currMode = "light";
  }
  console.log("you are trying  to change mode");
});