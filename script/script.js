const game = document.querySelector('.game');

// starting page dom
const startingPage = () => {
    const singlePlayer = document.createElement('button');
    const twoPlayer = document.createElement('button');

    singlePlayer.textContent = 'Single Player';
    singlePlayer.classList = 'single-player-button';
    singlePlayer.classList.add('player-button');

    twoPlayer.textContent = 'Two Players';
    twoPlayer.classList = 'two-player-button';
    twoPlayer.classList.add('player-button');

    game.appendChild(singlePlayer);
    game.appendChild(twoPlayer);
}

// REMOVE ALL CHILD NODES
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//  factory function for creating elements
const person = () => {
    const myHeading = (classHtml,innerHtml) => {
        const heading1 = document.createElement('h3');
        heading1.innerHTML = innerHtml;
        heading1.classList = classHtml;
        return { heading1 };
    }
    const myInput = (inputType, inputPlaceholder, inputClass) => {
        const input1=document.createElement('input');
        input1.type=inputType;
        input1.placeholder=inputPlaceholder;
        input1.classList=inputClass;
        return {input1};
    }
    const myButton = (buttonClass, buttonHtml) => {
        const myButton = document.createElement('button');
        myButton.innerHTML=buttonHtml;
        myButton.classList=buttonClass;
        return {myButton};
    }
    return {myHeading, myInput, myButton};
}
function singlePlayerPage() {
    const heading1 = person().myHeading('heading-player1', 'Player1');
    const playerName = person().myInput('text','Enter your name','enter-name');
    const playGame = person().myButton('play-game','Play game');
    game.appendChild(heading1.heading1);
    game.appendChild(playerName.input1);
    game.appendChild(playGame.myButton);
}

function twoPlayerPage() {
    const heading1=person().myHeading('heading-player1','Player 1');
    const playerName=person().myInput('text','Enter your name','enter-name');
    const heading2 = person().myHeading('heading-player1','Player 2');
    const playerName2 =person().myInput('text','Enter your name','enter-name');
    const playGame = person().myButton('play-game','Play game');
    game.appendChild(heading1.heading1);
    game.appendChild(playerName.input1);
    game.appendChild(heading2.heading1);
    game.appendChild(playerName2.input1);
    game.appendChild(playGame.myButton);
}
startingPage();

// event listeners
const eventListener = () => {
    document.querySelector('.single-player-button').addEventListener('click', () => {
        removeAllChildNodes(game);
        singlePlayerPage();
    });
    document.querySelector('.two-player-button').addEventListener('click', () => {
        removeAllChildNodes(game);
        twoPlayerPage();
    })
}
eventListener();
