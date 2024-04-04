
const playerNameTag = localStorage.getItem('PlayerName');
console.log(playerNameTag);

const Name = document.getElementById('name');
Name.innerHTML=playerNameTag;

const dicePTag = document.getElementById('DiceNumber');


const diceNumber = document.getElementById('Roll');
diceNumber.addEventListener('click',PigGame);

function PigGame(event){

    let diceRoll=Math.ceil(Math.random()*6);

    dicePTag.innerHTML=diceRoll;
   
    event.preventDefault();

    console.log(diceRoll);


}


