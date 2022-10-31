const WEAPONS = ["paper", "scissors", "rock"]; //Winner on the right looping around
let userHealth = 100;
let comHealth = 100;




function playGame(e) {
    
    if (!e.target.classList.contains('weapon')) return;
    let userChoice = (e.target.textContent).toLowerCase();

    let comChoice = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
    let winner;

    const userHealthBar = document.querySelector('.user');
    const comHealthBar = document.querySelector('.com');

    if (WEAPONS.indexOf(userChoice) !== WEAPONS.indexOf(comChoice)) {
        if (WEAPONS.indexOf(userChoice) === (WEAPONS.indexOf(comChoice) + 1) % 3) {
            winner = 'com'
            comHealth = comHealth - 10;
            
            comHealthBar.style.backgroundColor = 'red';

            setTimeout(() => {
                comHealthBar.style.backgroundColor = 'gray';
            }, '200');


        }
        else {
            winner = 'user'
            userHealth = userHealth - 10;

            userHealthBar.style.backgroundColor = 'red';
            setTimeout(() => {
                userHealthBar.style.backgroundColor = 'green';
            }, '200');

        }
    }
    else {
        winner = 'tie';
    }


    if (winner === 'tie') {
        e.target.style.backgroundColor = 'blue';
    }

    else {
        document.querySelector(`#${comChoice}`).style.backgroundColor = 'gray';
        e.target.style.backgroundColor = 'green';
    }



    userHealthBar.style.backgroundImage = `linear-gradient(to right, 
                                        rgba(0,0,0,0) ${userHealth}%, 
                                        rgb(255, 255, 255) 0%)`;
    comHealthBar.style.backgroundImage = `linear-gradient(to right, 
                                        rgba(0,0,0,0) ${comHealth}%, 
                                        rgb(255, 255, 255) 0%)`;




    setTimeout(() => {
        document.querySelector(`#${comChoice}`).style.backgroundColor = 'white';
        e.target.style.backgroundColor = 'white';
    }, '500');


    const resultsScreen = document.querySelector('.results-screen')
    const resultsDiv = document.querySelector('.results')
    const blur = document.querySelector('.blur');

    if (!userHealth) {
        resultsDiv.textContent = 'You Lose!';
        resultsScreen.style.display = 'block';
        document.querySelector('.healthbar-container').classList.add('blur');
        document.querySelector('.weapons-container').classList.add('blur');
        window.addEventListener("click", () => window.location.reload());


    }
    if (!comHealth) {
        resultsDiv.textContent = 'You Win!';
        resultsScreen.style.display = 'block';
        document.querySelector('.healthbar-container').classList.add('blur');
        document.querySelector('.weapons-container').classList.add('blur');
        window.addEventListener("click", () => window.location.reload());

    }


}




function main() {

    window.addEventListener('click', playGame);
}


main();