
const playerNameTag = localStorage.getItem('PlayerName');
console.log(playerNameTag);

const Name = document.getElementById('name');
Name.innerHTML=playerNameTag;

const dicePTag = document.getElementById('DiceNumber');


const diceNumber = document.getElementById('Roll');
diceNumber.addEventListener('click',PigGame);

const scoreNumber = document.getElementById('score');

let roundNumber = document.getElementById('RoundNumber');


let totalScore = 0;
let totalRounds = 0;
let currentScoreOfThisRound=0;

function PigGame(event){
    
    event.preventDefault();

    let diceRoll=Math.ceil(Math.random()*6);

    dicePTag.innerHTML=diceRoll;


    function addedValue(){
    
        let score = totalScore + diceRoll;
        totalScore=score; 
        totalRounds++;   
        return score;
    }

    if(diceRoll!=1){
        scoreNumber.innerHTML=addedValue(score);
        roundNumber.innerHTML=totalRounds;
        
    }
    else
    {
        scoreNumber.innerHTML=totalScore;
        totalRounds=0;
        roundNumber.innerHTML=totalRounds;
    }
}


