let BOX =document.querySelectorAll(".BOX");
let resetbtn = document.querySelector(".reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgcontainner = document.querySelector("#msg-containner");
let msg = document.querySelector("#msg");

let turn0 = true;  //playerX , playerO

const winPatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,4,8],
   [2,5,6],
   [0,3,6],
   [1,4,7],
   [2,5,8], 
];

const resetGame = () =>{
  turn0 = true;
  enableBOX;
  msgcontainner.classList.add("hide");
}

BOX.forEach((BOX) =>{
  BOX.addEventListener("click",()=>{
console.log("box was clicked");
if(turn0){  //player0
  BOX.innerText = "0";
  turn0 = false;
} else{  //playerX
  BOX.innerText = "X";
  turn0 = true;
}

BOX.disable = true;
checkwinner();
  })
});

const disableBOX = ()=>{
for( let box of BOX){
  BOX.disabled = true;
}
};
const enableBOX = ()=>{
  for( let box of BOX){
    BOX.disable = false;
    box.innerText = "";
  }
  };

const showWinner = () =>{
  msg.innerText = `congratulation, Winner is ${winner}`;
  msgcontainner.classList.remove("hide");
  disableBOX();
};
const checkwinner =()=>{
  for(let pattern of winPatterns){
    let pos1val = BOX[pattern[0]].innerText;
    let pos2val = BOX[pattern[1]].innerText;
    let pos3val = BOX[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        showWinner(pos1val);
      }
    }
  }
};
newgameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);