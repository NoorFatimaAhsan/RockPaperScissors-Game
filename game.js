let userScore=0;
let systemScore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user_score");
const systemScorePara= document.querySelector("#system_score");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
     else{
        systemScore++;
        systemScorePara.innerText=systemScore;
        msg.innerText=`Game Lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="rgb(192, 3, 3)";
        
     }
}

const gencompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("userChoice = ",userChoice)
    const compChoice=gencompChoice();
    console.log("compChoice = ",compChoice);
    if(userChoice===compChoice){
        msg.innerText=" Game Draw ..";
        msg.style.backgroundColor="#081b31";    
    }
    else {
        let userWin=true;
       if(userChoice==="rock"){
            (compChoice==="scissors")?userWin=true:userWin=false;
       }
       else if(userChoice==="paper"){
            (compChoice==="scissors")?userWin=false:userWin=true;
       }
       else
            (compChoice==="rock")?userWin=false:userWin=true;
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})

