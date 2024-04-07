
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
    else {
        totalRounds = 0;
        roundNumber.innerHTML = totalRounds;
        currentScoreOfRound = 0;
        scoreOfRound.innerHTML = 0;
    }
}
freeze.addEventListener('click', function(){
    function addedValue() {

        totalScore = currentScoreOfRound + totalScore;

        totalRounds = 0;
        roundNumber.innerHTML = totalRounds;
        currentScoreOfRound=0;
        scoreOfRound.innerHTML=currentScoreOfRound;
      

        console.log(totalScore);

        return totalScore;

    }
    scoreNumber.innerHTML = addedValue();
});
