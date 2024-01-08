let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");
const resetScore = document.querySelector("#reset");

choices.forEach((e)=>{
    e.addEventListener("click",()=>{
        let userChoice = e.getAttribute("id");
        // console.log(userChoice," was clicked!!");
        playGame(userChoice);
    })
});

resetScore.addEventListener("click", ()=>{
    console.log("The game was reset.");
    userScore = 0;
    compScore = 0;
    userScorePara.innerHTML = userScore;
    computerScorePara.innerHTML = compScore;
})

const showWinner = (winner, userChoice, computerChoice)=>{
    if(winner){
        console.log("You win !!");
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Winnn !!! Your ${userChoice} beats ${computerChoice}.`;
        msg.style.backgroundColor = "rgb(82, 242, 58)";
        msg.style.color = "#081b31";
    }
    else{
        console.log("You Loose !!");
        compScore++;
        computerScorePara.innerHTML = compScore;
        msg.innerHTML = `🥳You Lose 😂🥳 Your ${userChoice} was beaten like hell by ${computerChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#081b31";
    }
}

const playGame = (userChoice)=>{
    console.log("User clicked ", userChoice);
    const computerChoice = generateComputerChoice();
    console.log(computerChoice);
    if(userChoice === computerChoice){
        console.log("draw");
        msg.innerHTML = "DRAW!";
        msg.style.backgroundColor = "#081b31";
        msg.style.color = "aliceblue";
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = computerChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false: true;
        }
        else{
            userWin = computerChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

const generateComputerChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}