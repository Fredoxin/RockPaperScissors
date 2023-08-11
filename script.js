let playerScore = 0;
let cpuScore = 0;
let announcement = document.querySelector(".announcement");


///FUNCTION EXPRESSION I USE FOR THE GAME////   

const gameEnd = function () {

    if (playerScore == 5) {
        setTimeout(()=>{
            announcement.textContent = "YOU WON THE GAME";
        }, 1000)
    }  else if (cpuScore == 5) {
        setTimeout(()=>{
            announcement.textContent = "YOU LOST THE GAME";
        }, 1000)
    }
}
        
const cpuChoice = function () {
    const options = ["rock", "paper", "scissors"];
    const result = Math.floor(Math.random() * options.length);
    return options[result]
   };
   

const updatePlayerScore = function () {
        const scoreBoardPlayer = document.querySelector(".playerScoreBoard .score");
        playerScore++;
        scoreBoardPlayer.textContent = `${playerScore}`;
         };

const updateCpuScore = function () {
        const scoreBoardPlayer = document.querySelector(".cpuScoreBoard .score");
        cpuScore++;
        scoreBoardPlayer.textContent = `${cpuScore}`;

        };

const playRound = function (playersChoice = button.value, cpuChoice = cpu) { 
 
   if (playersChoice == cpuChoice) {                                                // EVENT HANDLING WHEN OUTCOME IS A DRAW.
        setTimeout(() => {                                                          // display players choice.
            announcement.textContent = `You chose ${playersChoice}`;               
                setTimeout(()=>{
                    announcement.textContent = `CPU chose ${cpuChoice}`;             //display cpu choice.
                        setTimeout(()=>{
                            announcement.textContent = "It a draw!";                //display round outcome
                            setTimeout(()=> {
                                announcement.textContent = "Choose your weapon for your next battle"; 
                            }, 1000)
                        }, 500)

                },1000)

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
                                    announcement.textContent = "Choose your weapon for your next battle"; 
                                }, 1000)
                            }, 500)
                    }, 1000) 
            }, 100)
             
                

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
                                    announcement.textContent = "Chosse you weapon for your next battle"; 
                                }, 1000)
                            }, 500)
                    }, 1000) 
            }, 100)
        }
    }
    

    
     /*   while (playerScore && cpuScore < 5) {
        playRound();
    }    */

    


/////////////////////////
///////Events////////////
////////////////////////


const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click",() => {
            
            let playersChoice = button.value;
            
            let cpu = cpuChoice();
            
            if (playerScore < 5 && cpuScore < 5) {
                
              playRound(playersChoice, cpu)

            } else if (playerScore === 5 || cpuScore === 5) {
                gameEnd()
                };
        
    });
});




       
           /*
           
            if (playersChoice == "Rock") {
   
                announcement.innerText = "You chose rock";    
                    

            if (cpuChoice == "rock") {
                setTimeout(() => {
                    announcement.innerText = "Computer chose rock";  

                }, 1500);
                       
                setTimeout(() => {
                    announcement.innerText = "Its a draw!";

                }, 2500)
                }
                else if (cpuChoice == "paper") {
                    
                    setTimeout(() => { 
                        announcement.innerText = "Computer chose paper";
                    }, 1500);        
                    
                    setTimeout(() => { 
                        announcement.innerText = "Paper beats rock. You lose!";
                    }, 2500); 
                    
                    cpuScore++;
                    setTimeout(()=> {
                        updateCpuScore()
                    }, 3500)    
                    }   
                else if (cpuChoice == "scissors") {
                    setTimeout(() => { 
                        announcement.innerText = "Computer chose Scissor";
                    }, 1500); 

                    setTimeout(() => { 
                        announcement.innerText = "Rock beats Scissors. You win!";
                    }, 2500); 

                    playerScore++;
                    setTimeout(()=> {
                        updatePlayerScore()
                    }, 3500) 
                    
                    }
                }

            else if (playersChoice == "Paper") {
   
                announcement.innerText = "You chose paper";    
                        
    
                if (cpuChoice == "rock") {
                    
                    setTimeout(() => {
                        
                        announcement.innerText = "Computer chose rock";  
    
                    }, 1500);
                           
                    setTimeout(() => {
                        announcement.innerText = "Paper shatters rock...lol. You Win!";
    
                    }, 2500)
                    playerScore++;
                    setTimeout(()=> {
                        updatePlayerScore()
                    }, 3500)    
                    }   
                    
                    else if (cpuChoice == "paper") {
                        setTimeout(() => { 
                            announcement.innerText = "Computer chose paper.";
                        }, 1500);        
                        
                        setTimeout(() => { 
                            announcement.innerText = "Its a draw!";
                        }, 2500); 
                        
                        
                            
                        }   
                    else if (cpuChoice == "scissors") {
                        setTimeout(() => { 
                            announcement.innerText = "Computer chose scissor";
                        }, 1500); 
    
                        setTimeout(() => { 
                            announcement.innerText = "Scissor slices paper. You lose!";
                        }, 2500); 
    
                        cpuScore++;
                        setTimeout(()=> {
                            updateCpuScore()
                        }, 3500)    
                        }}
                        
                    

                    else if (playersChoice == "Scissors") {
   
                        announcement.innerText = "You chose scissors";    
                            
        
                        if (cpuChoice == "rock") {
                        setTimeout(() => {
                            announcement.innerText = "Computer chose rock";  
        
                        }, 1500);
                               
                        setTimeout(() => {
                            announcement.innerText = "You get crushed by rock and die!";
        
                        }, 2500)
                        cpuScore++
                        setTimeout(()=> {
                            updateCpuScore()
                        }, 3500)    
                        } 
                        
                        else if (cpuChoice == "paper") {
                            setTimeout(() => { 
                                announcement.innerText = "Computer chose paper";
                            }, 1500);        
                            
                            setTimeout(() => { 
                                announcement.innerText = "Scissors cuts paper. You win!";
                            }, 2500); 
                            
                            playerScore++;
                            setTimeout(()=> {
                                updatePlayerScore()
                            }, 3500)    
                            }   
                            
                           
                        else if (cpuChoice == "scissors") {
                            setTimeout(() => { 
                                announcement.innerText = "Computer chose Sscissors";
                            }, 1500); 
        
                            setTimeout(() => { 
                                announcement.innerText = "draw!";
                            }, 2500);   
                            }}}
                        
                    
*/

                    


   /* if (playerScore || cpuScore < 5) {
        return;
         } else {
            


          } */

          /*function stopGame () {
            let announcement = document.querySelector(".announcement");  
            
            setTimeout( ()=> {
            
                if(playerScore == 5) {
                        announcement.textContent = "YOU WON!!"
            
                } else if (cpuScore == 5) {
            
                    announcement.textContent = "CPU won!"
                }
                }, 2000)    
            
                 } 
        */


















       /* let playersScore = 0;
        let cpuScore = 0;
        i = 0;
        


       window.onload = function game()   {
        
        while (i < 5) {

        let userInput = prompt("Enter rock, paper or scissors")
        userInput = userInput.toLowerCase()
        if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
            alert("invalid Input - Enter rock, paper or scissor")
        } else {
        console.log(playRound(userInput, cpuChoice = randomSelection())) §
        i++ }
        }

    
        if(cpuScore < playersScore) {
            alert("You Win")
        }
         else if(cpuScore > playersScore) {
            alert("CPU wins");
         } else {alert("It is a draw")}

     } */




     // NOTES got later

     // implement power up that allow you to win against 1 more opponent
     // change RPS to something else. eg ork, knight, elve

