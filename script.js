let playerScore = 0;
let cpuScore = 0;
let announcement = document.querySelector(".announcement");


///FUNCTION EXPRESSION I USE FOR THE GAME////   

const gameEnd = function () {

    if (playerScore == 5) {
        setTimeout(()=>{
            
            announcement.textContent = "YOU WON THE GAME";
            setTimeout(()=>{
                showEndingScreen()
            }, 2000)
        }, 500)
    }  else if (cpuScore == 5) {
        setTimeout(()=>{
            
            announcement.textContent = "YOU LOST THE GAME";
            setTimeout(()=>{
                showEndingScreen()
            }, 2000)
        }, 500)
    }
};
        
const cpuChoice = function () {
    const options = ["rock", "paper", "scissors"];
    const result = Math.floor(Math.random() * options.length);
    return options[result]
   };
   

const updatePlayerScore = function () {
        const scoreBoardPlayer = document.querySelector(".playerScoreBoard .score");
        playerScore++;
        scoreBoardPlayer.textContent = `${playerScore}`;
        if (playerScore == 5 || cpuScore == 5) {
            gameEnd();
            } 
         };

const updateCpuScore = function () {
        const scoreBoardPlayer = document.querySelector(".cpuScoreBoard .score");
        cpuScore++;
        scoreBoardPlayer.textContent = `${cpuScore}`;
        if (playerScore == 5 || cpuScore == 5) {
            gameEnd();
            } 
        };
// THE GAME
const playRound = function (playersChoice, cpuChoice = cpu) { 
 
   if (playersChoice == cpuChoice) {                                                // EVENT HANDLING WHEN OUTCOME IS A DRAW.
        setTimeout(() => {                                                          // displays players choice.
            announcement.textContent = `You chose ${playersChoice}`;               
                setTimeout(()=>{
                    announcement.textContent = `CPU chose ${cpuChoice}`;             //displays cpu choice.
                        setTimeout(()=>{
                            announcement.textContent = "It a draw!";                //display round outcome
                            setTimeout(()=> {
                                announcement.textContent = "Choose your weapon for your next battle"; 
                            }, 1500)
                        }, 1200)

                },1200)

        }, 100) 
   }
   else if ((playersChoice == "rock" && cpuChoice == "scissors") ||                 // EVENT HANDLING WHEN PLAYER WINS
            (playersChoice == "paper" && cpuChoice == "rock") || 
            (playersChoice == "scissors" && cpuChoice == "paper")) {
            
            setTimeout(() =>{
                announcement.textContent = `You chose ${playersChoice}`; 
                    setTimeout(()=>{
                        announcement.textContent = `CPU chose ${cpuChoice}`; 
                            setTimeout(()=>{
                                announcement.textContent = "YOU WON!"; 
                                updatePlayerScore();
                                    setTimeout(()=> {
                                    if (playerScore == 5) {return}
                                    else {
                                    announcement.textContent = "Choose your weapon for your next battle"; 
                                    }
                                }, 1500);
                            }, 1200);
                    }, 1200); 
            }, 100);

            }
    else if ((playersChoice == "rock" && cpuChoice == "paper") ||                 // EVENT HANDLING WHEN PLAYER LOST
            (playersChoice == "paper" && cpuChoice == "scissors") || 
            (playersChoice == "scissors" && cpuChoice == "rock")) {
            
            setTimeout(() =>{
                announcement.textContent = `You chose ${playersChoice}`; 
                    setTimeout(()=>{
                        announcement.textContent = `CPU chose ${cpuChoice}`; 
                            setTimeout(()=>{
                                announcement.textContent = "YOU LOST!"; 
                                updateCpuScore();
                                setTimeout(()=> {
                                    if(cpuScore == 5) {return}
                                    else {
                                    announcement.textContent = "Choose your weapon for your next battle";
                                }
                                }, 1500);
                            }, 1200);
                    }, 1200); 
            }, 100);
        }
         
    }

/////////////////////////
///////Events////////////
////////////////////////


const buttons = document.querySelectorAll("button");                                        // creates node-list of all buttons

 buttons.forEach(button => {
        button.addEventListener("click",() => {                                             // adds eventlistener "click" to each button and assigns 
                                                                                            // the value of the button to the playerChoice variable
            let playersChoice = button.value;
            
           // let cpu = cpuChoice();                                                              
            
            if (playerScore < 5 && cpuScore < 5) {
                
              playRound(playersChoice, cpuChoice())                                                 // runs the game as long score is not 5 and the player clicks a button
              disableButtons()
            }
           
            
    });    
});




function disableButtons () {                // DISABLES AND ENABLES THE BUTTON FOR THE TIME THE GAME RUNS.
    buttons.forEach(button =>{
        button.disabled = true;

       
      setTimeout(() => {
        button.disabled = false;
      }, 4000)

    })

}



function showEndingScreen () {
    const allElements = document.querySelectorAll("body *");
    
    allElements.forEach(element => {
        element.classList.add("hide")


    })
    createPara()
    setTimeout(()=>{
        createPlayAgainButton()
    }, 2500)
}

function createPara () {
    const para = document.createElement("p");
    const body = document.querySelector("body");
    para.textContent = "Thank you for playing";
    para.classList.add("center", "stylingThankYou");
    body.appendChild(para);
    

}
const playAgainButton = document.createElement("button")

function createPlayAgainButton () {
    
    const body = document.querySelector("body");

    playAgainButton.textContent = "Play again";
    playAgainButton.classList.add("playAgainButtonStyling")
    body.appendChild(playAgainButton);

}




playAgainButton.addEventListener("click", () => {
    window.location.reload()
})




     // NOTES got later

     // implement power up that allow you to win against 1 more opponent
     // change RPS to something else. eg ork, knight, elve