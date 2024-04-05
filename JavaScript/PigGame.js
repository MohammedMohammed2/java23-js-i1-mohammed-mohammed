
const playerNameTag = localStorage.getItem('PlayerName');
console.log(playerNameTag);

const Name = document.getElementById('name');
Name.innerHTML = playerNameTag;

const dicePTag = document.getElementById('DiceNumber');


const diceNumber = document.getElementById('Roll');
diceNumber.addEventListener('click', PigGame);

const freeze = document.getElementById('Freeze');


let scoreNumber = document.getElementById('score');

let roundNumber = document.getElementById('RoundNumber');

let scoreOfRound = document.getElementById('ObtainedScore');


let totalScore = 0;
let totalRounds = 0;
let currentScoreOfRound = 0;

function PigGame(event) {

    event.preventDefault();

    let diceRoll = Math.ceil(Math.random() * 6);

    dicePTag.innerHTML = diceRoll;


    function addedScorePerRound() {

        let ObtainedScore = diceRoll + currentScoreOfRound;
        currentScoreOfRound = ObtainedScore;

        return ObtainedScore;
    }

    if (diceRoll != 1) {
        totalRounds++;
        roundNumber.innerHTML = totalRounds;
        scoreOfRound.innerHTML = addedScorePerRound(ObtainedScore);
    }
    else if(freeze.click){
        
    function addedValue() {

        let score = currentScoreOfRound;
        totalScore = score + currentScoreOfRound;

        scoreOfRound.innerHTML = 0;
        currentScoreOfRound = 0;

        return score;

    }
    scoreNumber.innerHTML=addedValue(score);

    }
    else {
        scoreNumber.innerHTML = totalScore;
        totalRounds = 0;
        roundNumber.innerHTML = totalRounds;
        currentScoreOfRound = 0;
        scoreOfRound.innerHTML = 0;
    }
}
