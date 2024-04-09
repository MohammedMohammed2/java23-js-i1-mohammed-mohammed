const formEL = document.getElementById('registeration');

formEL.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    
    event.preventDefault();

    const playerName = formEL.querySelector('input').value;

    localStorage.setItem('PlayerName', playerName);

    window.location.href='PigGame.html';

}