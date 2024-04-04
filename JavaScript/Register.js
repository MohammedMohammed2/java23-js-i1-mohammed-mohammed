const formEL = document.getElementById('registeration');

formEL.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    
    event.preventDefault();

    const playerName = formEL.querySelector('input').value;
    console.log(playerName);

    localStorage.setItem('PlayerName', playerName);

    console.log(localStorage)

    window.location.href='PigGame.html';

}