const game=document.querySelector('.game');

// starting page dom
const startingPage = () => {
    const singlePlayer=document.createElement('button');
    const twoPlayer=document.createElement('button');

    singlePlayer.textContent='Single Player';
    singlePlayer.classList='single-player-button';
    singlePlayer.classList.add('player-button');
    
    twoPlayer.textContent='Two Players';    
    twoPlayer.classList='two-player-button';
    twoPlayer.classList.add('player-button');
    
    game.appendChild(singlePlayer);
    game.appendChild(twoPlayer);
}

// REMOVE ALL CHILD NODES
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
//  single player page dom
function singlePlayerPage() {
    const heading1=document.createElement('h3');
    heading1.innerHTML='Player 1';
    heading1.classList='heading-player1'

    const playerName=document.createElement('input');
    playerName.type='text';
    playerName.placeholder='Enter your name';
    playerName.classList='enter-name';

    const playGame=document.createElement('button');
    playGame.innerHTML='Play Game';
    playGame.classList='play-game';
    
    game.appendChild(heading1);
    game.appendChild(playerName);
    game.appendChild(playGame);
}

function twoPlayerPage() {

}


startingPage();

// event listeners
const eventListener = () => {
    document.querySelector('.single-player-button').addEventListener('click',()=>{
        removeAllChildNodes(game);
        singlePlayerPage();
    });
    document.querySelector('.two-player-button').addEventListener('click',()=>{
        removeAllChildNodes(game);
        twoPlayerPage();
    })
}
eventListener();
