const WEAPONS = ["paper", "scissors", "rock"]; //Winner on the right looping around



function playRound(userChoice) {
    let winner;
    let comChoice = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];


    userChoiceIndex = WEAPONS.indexOf(userChoice);
    comChoiceIndex = WEAPONS.indexOf(comChoice);

    if (userChoiceIndex !== comChoiceIndex) {
        winner = (comChoiceIndex === (userChoiceIndex + 1) % 3) ? "com" : "user";
    }


    let invalid = true;
    while (invalid) {
        userChoice = prompt("Choose your weapon (Rock/Paper/Scissors)").toLowerCase();
        if (WEAPONS.includes(userChoice)) {
            invalid = false;
        }
        else {
            alert("Pick again. Rock paper or scissors.");
        }


    }

    console.log(`You chose ${userChoice}.`)
    console.log(`Computer chose ${comChoice}.`)

    if (results === "com") {
        console.log("You lost!");
    }
    else if (results === "user") {
        console.log("Winner!");
    }

    else {
        console.log("Its a tie");
    }

    

}


function game() {
    // Five rounds. If either win 3 they auto win. Ties don't matter
    let compScore = 0;
    let userScore = 0;
    let results;
    let running = true;
    while (running) {
        results = playRound();
        if (results === "user") {
            userScore++;
        }
        else if (results === "com") {
            compScore++;
        }

        if (userScore == 3) {
            console.log("You win!")
            running = false;
        }

        else if (compScore == 3) {
            console.log("You lose :( Try Again")
            running = false;
        }

        console.log(`Your points: ${userScore}`);
        console.log(`Com points: ${compScore}`);
        

    }

}


game();