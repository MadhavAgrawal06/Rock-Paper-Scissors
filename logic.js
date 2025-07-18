const choice=document.querySelectorAll(".choice");
const showMsg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

let userScore=0;
let compScore=0;

const getCompInput=()=>{
  let arr=["rock","paper","scissors"];
  const rdmIdx=Math.floor(Math.random()*3);
  return(arr[rdmIdx]);
}

Draw=()=>{
 showMsg.innerText="It's a tie";
 showMsg.style.backgroundColor="rgb(71, 46, 46)";
}

checkWinner=(userWin,getUserInput,compChoice)=>{
  if(userWin==true){
    showMsg.innerText=`You Win, Your ${getUserInput} beats ${compChoice}`;
    showMsg.style.backgroundColor="Green";
    userScore++;
    userScorePara.innerText=userScore;
    }
  else{
    showMsg.innerText=`Computer Win, ${compChoice} beats Your ${getUserInput}`;
    showMsg.style.backgroundColor="Red";
    compScore++;
    compScorePara.innerText=compScore;
    }
}

const playGame=(getUserInput)=>{

 const compChoice=getCompInput();

 if(getUserInput==compChoice){
  Draw();
 }

/* 
 else {
    let userWin = true;

    if (getUserChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    } 
    else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin); 
  }
  (You can also use these Ternary Operator for calculating winner instead of If-else like I have done below).
*/

 else{
  let userWin=true;

  if(getUserInput==="rock"){
    if(compChoice==="scissors"){
     userWin=true;
    }
    else{
     userWin=false;
    }
 }
 
 else if(getUserInput==="paper"){
    if(compChoice==="rock"){
     userWin=true;
    }
    else{
     userWin=false;
    }
 } 

 else if(getUserInput==="scissors"){
    if(compChoice==="paper"){
     userWin=true;
    }
    else{
     userWin=false;
    }
 }
 checkWinner(userWin,getUserInput,compChoice);
}    
}

choice.forEach((val)=>{
  val.addEventListener("click",()=>{
    const getUserInput=val.getAttribute("id");
    playGame(getUserInput);
});
});



