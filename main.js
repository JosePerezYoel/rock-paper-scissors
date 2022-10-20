const WEAPONS = ["paper", "scissors", "rock"]; //Winner on the right looping around

let comChoice;

function makeDecision(userChoice) {
    let winner;
    comChoice = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];


    userChoiceIndex = WEAPONS.indexOf(userChoice);
    comChoiceIndex = WEAPONS.indexOf(comChoice);

    if (userChoiceIndex !== comChoiceIndex) {
        winner = (comChoiceIndex === (userChoiceIndex + 1) % 3) ? "com" : "user";
    }

    return winner;
}

function round() {
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
    let results = makeDecision(userChoice);
    console.log(`You chose ${userChoice},`)
    console.log(`Computer chose ${comChoice},`)
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
    for (let i = 0; i < 5; i++) {
        round();
    }

}


game();