let win = 0; let loses = 0;
const choix = ["Bulbizarre", "Carapuce", "Salamèche"];
const gameStatus = document.getElementById("gameStatus");
const gameChoice = document.getElementById("gameScore");
const Bulbizarre = document.getElementById("Bulbizarre");
const Carapuce = document.getElementById("Carapuce");
const Salamèche = document.getElementById("Salamèche");

function runGame(userChoice) {
    const OrdiChoice = choix[Math.floor(Math.random() * choix.length)];

    switch(userChoice + '_' + OrdiChoice) {
        case 'Bulbizarre_Salamèche':
        case 'Carapuce_Bulbizarre':
        case 'Salamèche_Carapuce':
            loses += 1;
            gameStatus.innerHTML = `Moi : ${userChoice} | Computer : ${OrdiChoice} -> Computer Wins`
            break;
        case 'Bulbizarre_Carapuce':
        case 'Carapuce_Salamèche':
        case 'Salamèche_Bulbizarre':
                win += 1;
                gameStatus.innerHTML = `Moi : ${userChoice} | Computer : ${OrdiChoice} -> Me Wins`
                break;
        case 'Bulbizarre_Bulbizarre':
        case 'Carapuce_Carapuce':
        case 'Salamèche_Salamèche':
                    
                    gameStatus.innerHTML = `Moi : ${userChoice} | Computer : ${OrdiChoice} -> égalité`
                    break;
    }

    gameScore.innerHTML = `Moi : ${win} | Computer : ${loses}`;
    if(win === 5){
        alert("Bravo ! 👏");
        location.reload();
    };
    if(loses === 5){
        alert("Pérdu ! 😢");
        location.reload();
    }
}

Bulbizarre.addEventListener('click', () => runGame("Bulbizarre"));
Carapuce.addEventListener('click', () => runGame("Carapuce"));
Salamèche.addEventListener('click', () => runGame("Salamèche"));