        const cpuChoice = function randomSelection() {
            const options = ["rock", "paper", "scissors"];
            const result = Math.floor(Math.random() * options.length);
            return options[result]
          }
      
      
      

        

        const playRound = function playRound (playersChoice, cpuChoice) { 
            //userInput = prompt("Enter rock, paper or scissors")
           //playersChoice = playersChoice.toLowerCase()
          //console.log(cpuChoice())
              if (playersChoice == "Rock") {
                    console.log("You chose rock")
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock");
                        return("Its a draw, no points");
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper");
                     //   cpuScore++;
                        return "Paper beats rock, you lose!";
                    }   
                    else if (cpuChoice == "scissors") {
                        console.log("CPU chose scissors");
                      //  playersScore++;
                        return "Rock beats scissors, you WIN!";
                    }

                } else if( playersChoice == "Paper") {
                    console.log("You chose paper")
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock")
                     //   playersScore++;
                        return "Paper beats rock, you win!";
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper")
                        return "Its a draw!";
                    }
                    else if (cpuChoice == "scissors") {
                        console.log("CPU chose scissors")
                       // cpuScore++;
                        return "Scissor beats paper, CPU wins!";
                    }
                } else if (playersChoice == "Scissors") {
                    console.log("You chose scissors")
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock")
                       // cpuScore++;
                        return "Rock beats scissors, you lose!";
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper")
                       // playersScore++;
                        return "Scissor beats paper, you win!";
                    }
                    else if (cpuChoice == "scissors") {
                        console.log("CPU chose scissors")
                        return "Scissors, its a draw!";
                    }
                }
                
        }

        
     


/////////////////////////
///////Events////////////
////////////////////////


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click",() => {
        const playersChoice = button.value;
        const result = playRound(playersChoice, cpuChoice())
       // console.log(playRound(playersChoice, cpuChoice()))
        console.log(result)
        
    });
})
    























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