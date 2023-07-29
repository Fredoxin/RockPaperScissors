

        function randomSelection() {
            const options = ["rock", "paper", "scissor"];
            const result = Math.floor(Math.random() * options.length);
            return options[result];
        }
        
      

        

        const playRound = function playRound (playersChoice = userInput, cpuChoice = randomSelection()) { 
            
            playersChoice = playersChoice.toLowerCase()
            
              if (playersChoice == "rock") {
                    console.log("You chose rock")
                    if (cpuChoice == "rock") {
                        console.log("CPU chose rock");
                        return "Its a draw, no points";
                    }
                    else if (cpuChoice == "paper") {
                        cpuScore++;
                        return "Paper beats rock, you lose!";
                    }   
                    else if (cpuChoice == "scissor") {
                        playersScore++;
                        return "rock beats scissor, you WIN!";
                    }

                } else if( playersChoice == "paper") {
                    if (cpuChoice == "rock") {
                        playersScore++;
                        return "Paper beats roch, you win!";
                    }
                    else if (cpuChoice == "paper") {
                        return "Its a draw!";
                    }
                    else if (cpuChoice == "scissor") {
                        cpuScore++;
                        return "Scissor beats paper, CPU wins!";
                    }
                } else if (playersChoice == "scissor") {
                    if (cpuChoice == "rock") {
                        cpuScore++;
                        return "rock beats scissor, you lose!";
                    }
                    else if (cpuChoice == "paper") {
                        playersScore++;
                        return "Scissor beats paper, you win!";
                    }
                    else if (cpuChoice == "scissor") {
                        return "Scissors, its a draw!";
                    }
                }
                
        }

        let playersScore = 0;
        let cpuScore = 0;
       
        


       window.onload = function game()   {
        i = 0;
        while (i < 5) {

        let userInput = prompt("Enter rock, paper or scissor")
        userInput = userInput.toLowerCase()
        if (userInput != "rock" && userInput != "paper" && userInput != "scissor") {
            alert("invalid Input - Enter rock, paper or scissor")
        } else {
        console.log(playRound(userInput, cpuChoice = randomSelection())) 
        i++ }
        } 

    
        if(cpuScore < playersScore) {
            alert("You Win")
        }
         else if(cpuScore > playersScore) {
            alert("CPU wins");
         } else {alert("It is a draw")}

     }
        
     
