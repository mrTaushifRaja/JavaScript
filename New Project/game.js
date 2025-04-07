let userscore = 0;
let compscore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("msg");

const userscorepara = document.querySelector("user-score");
const compscorepara = document.querySelector("comp-score");

let gencompchoice= () =>{
  const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random ()*3);
  return options[randIdx];
};

const drawGame = () =>{
  console.log("game was drawGame.");
  msg.innerText = "match draw! paly agin";
  msg.computedStyleMap.backgroundcolor="#081b31";
}

const showWinner = (userWin , userchoice , compchoice)=>{
  if(userWin){
    userscore++;
    userscorepara.innerText = user-scrore;

    msg.innerText =` you win! ${userchoice} beats {compchoice}`;
    msg.style.backgroundcolor = "green";
  }
  else{
    compscore++;
    compscorepara.innerText = user-scrore;
    console.log("you lose"); 
    msg.innerText = `you lose! ${compchoice} beats {userchoice}`;
    msg.style.backgroundcolor="red";
  }
}

const playGame =(userchoice)=>{
console.log("user choice =",userchoice);
//choice computer choice -> modulation
const compchoice = gencompchoice();
console,log("comp choic3e ",userchoice);

if(userchoice === compchoice){
  //draw Game
}
else{
  let userWin = true;
  if(userchoice === "rock"){
    //scissor, paper
    compchoice ==="paper" ? false:true;
  }else if(userchoice === "paper"){
    //rock scissor
    userWin = compchoice === "scissor"? false:true;
  } else {
    //rock , paper
    userWin = compchoice === "rock"? false:true;
  }
  showWinner(userWin , userchoice , compchoice)
}
};

choices.forEach((choice) =>{
  choice.addEventListener("click", () =>{
    const userchoice = choice.getAttribute("id");
console.log("choice was clicked",userchoice);
playGame(userchoice)
  });
});