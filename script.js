

      function randomSelection() {
            const options = ["rock", "paper", "scissors"];
            const result = Math.floor(Math.random() * options.length);
            return options[result]
          }
        
      

        

        const playRound = function playRound (playersChoice = userInput, cpuChoice = randomSelection()) { 
            userInput = prompt("Enter rock, paper or scissors")
            playersChoice = playersChoice.toLowerCase()
            alert("YES")
              if (playersChoice == "rock") {
                    console.log("You chose rock")
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock");
                        return "Its a draw, no points";
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper");
                        cpuScore++;
                        return "Paper beats rock, you lose!";
                    }   
                    else if (cpuChoice == "scissors") {
                        console.log("CPU chose scissors");
                        playersScore++;
                        return "Rock beats scissors, you WIN!";
                    }

                } else if( playersChoice == "paper") {
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock")
                        playersScore++;
                        return "Paper beats rock, you win!";
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper")
                        return "Its a draw!";
                    }
                    else if (cpuChoice == "scissor") {
                        console.log("CPU chose scissors")
                        cpuScore++;
                        return "Scissor beats paper, CPU wins!";
                    }
                } else if (playersChoice == "scissors") {
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock")
                        cpuScore++;
                        return "Rock beats scissors, you lose!";
                    }
                    else if (cpuChoice == "paper") {
                        console.log("CPU chose paper")
                        playersScore++;
                        return "Scissor beats paper, you win!";
                    }
                    else if (cpuChoice == "scissors") {
                        console.log("CPU chose scissors")
                        return "Scissors, its a draw!";
                    }
                }
                
        }

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
        
     


/////////////////////////
///////Events////////////
////////////////////////


const buttons = document.querySelectorAll("button");

buttons.forEach(button  => {
    
    button.addEventListener("click", playRound)

})