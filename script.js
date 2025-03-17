let option = ["Rock", "Paper", "Scissors"]
        let rock = document.getElementById("rock")
        let paper = document.getElementById("paper")
        let scissors = document.getElementById("scissors")
        let selection = document.querySelector(".selection")
        let game = document.querySelector(".game")
        let player = document.getElementById("player")
        let computers = document.getElementById("computers")
        let result = document.getElementById("result")
        let restart = document.getElementById("restart")
        let compscore = 0;
        let playscore = 0;
        let attempt = 10;
        
       
       
        function restartGame() {
            playscore = 0;
            compscore = 0;
            player.textContent = playscore;
            computers.textContent = compscore;

            game.innerHTML = '';

            result.textContent = '';

            attempt = 10;

         
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        }

        
        restart.addEventListener('click', restartGame);

    
        selection.addEventListener("click",(event)=>{

            let user = document.createElement("div")
            game.appendChild(user)
            if (event.target.id === 'rock'){
                user.textContent = "Rock"
            } 
            else if (event.target.id === 'paper'){
                user.textContent = "Paper"
            } 
            else if (event.target.id === 'scissors'){
                user.textContent = "Scissors"
            } 

            let random = Math.floor(Math.random () * option.length)
            let comchoice = option[random]
            let computer = document.createElement("div")
            computer.textContent = comchoice
            game.appendChild(computer)
            
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true


            if (user.textContent === 'Rock' && computer.textContent === 'Paper'){
               playscore += 5
                
            }

            else if (user.textContent === 'Rock' && computer.textContent === 'Scissors'){
               compscore += 5
               
            }
            
            else if (user.textContent === 'Paper' && computer.textContent === 'Rock'){
               playscore += 5
                
            }

           else if (user.textContent === 'Paper' && computer.textContent === 'Scissors'){
               compscore += 5
               
            }

           else if (user.textContent === 'Scissors' && computer.textContent === 'Paper'){
               playscore += 5
                
            }

           else if (user.textContent === 'Scissors' && computer.textContent === 'Rock'){
               compscore += 5
                
            }

            player.textContent = playscore
            computers.textContent = compscore

            attempt--;

        if (attempt > 0) {
        setTimeout(() => {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        game.innerHTML = '';
        }, 2000); 
        }

        else {
        if(compscore > playscore){
            result.textContent = "Sorry! you lose"
        }

        else if (playscore > compscore){
            result.textContent = "Congratulations! you won"
        }

        else {
            result.textContent = "It's a tie. Tough competition"
        }
    }
        })
