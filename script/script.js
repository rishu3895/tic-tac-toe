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
    const myDiv = (divClass, divHtml) => {
        const myDiv=document.createElement('div');
        myDiv.classList=divClass;
        myDiv.innerHtml=divHtml;
        return {myDiv};
    }
    

    return {myHeading, myInput, myButton, myDiv};
}
const myDivs = () => {
    const mainDiv=person().myDiv('main-grid-div','');
    const div1=person().myDiv('top-left grid-item','');
    const div2=person().myDiv('top-middle grid-item','');
    const div3=person().myDiv('top-right grid-item','');
    const div4=person().myDiv('middle-left grid-item','');
    const div5=person().myDiv('middle-middle grid-item','');
    const div6=person().myDiv('middle-right grid-item','');
    const div7=person().myDiv('lower-left grid-item','');
    const div8=person().myDiv('lower-middle grid-item','');
    const div9=person().myDiv('lower-right grid-item','');
    for(let i=1;i<10;i++){
        const temp=`div${i}.myDiv`;
        mainDiv.myDiv.appendChild(eval(temp));
    }
    return {mainDiv};
}
// single player page
function singlePlayerGame(player1, player2){
    const heading1=person().myHeading('heading-player-one-name player-name',player1);
    const heading2=person().myHeading('heading-player-two-name player-name',player2);
    const div=document.createElement('div');
    div.classList="game-div";
    div.appendChild(heading1.heading1); 
    div.appendChild(myDivs().mainDiv.myDiv);
    div.appendChild(heading2.heading1);
    game.appendChild(div);

    const lowerDiv=document.createElement('div');
    const resetBtn=person().myButton('reset-btn lower-btn','RESET');
    const mainMenuBtn=person().myButton('main-menu-btn lower-btn','MAIN MENU');
    lowerDiv.appendChild(resetBtn.myButton);
    lowerDiv.appendChild(mainMenuBtn.myButton);
    game.appendChild(lowerDiv);
    document.querySelector('.main-menu-btn').addEventListener('click',()=>{
        removeAllChildNodes(game);
        startingPage();
        eventListener();
    });
    document.querySelector('.reset-btn').addEventListener('click',()=>{
        resetGrid();
    });
    playGame();
}
function singlePlayerPage() {
    const heading1 = person().myHeading('heading-player1', 'Player1');
    const playerName = person().myInput('text','Enter your name','enter-name');
    const playGame = person().myButton('play-game','Play game');
    game.appendChild(heading1.heading1);
    game.appendChild(playerName.input1);
    playGame.myButton.classList.add("single-player-game");
    game.appendChild(playGame.myButton);
    document.querySelector('.single-player-game').addEventListener('click', () => {
        removeAllChildNodes(game);
        var playerOneName=playerName.input1.value;
        if(playerOneName===""){
            playerOneName="Player 1";
        }
        singlePlayerGame(playerOneName,'Computer');
    });
    
}
// multi player page
function twoPlayerPage() {
    const heading1=person().myHeading('heading-player1','Player 1');
    const playerName=person().myInput('text','Enter your name','enter-name');
    const heading2 = person().myHeading('heading-player1','Player 2');
    const playerName2 =person().myInput('text','Enter your name','enter-name');
    const playGame = person().myButton('play-game','Play game');
    playGame.myButton.classList.add("multi-player-game");
    game.appendChild(heading1.heading1);
    game.appendChild(playerName.input1);
    game.appendChild(heading2.heading1);
    game.appendChild(playerName2.input1);
    game.appendChild(playGame.myButton);
    document.querySelector('.multi-player-game').addEventListener('click', () => {
        removeAllChildNodes(game);
        var playerOneName=playerName.input1.value;
        var playerTwoName=playerName2.input1.value;
        if(playerOneName==''){
            playerOneName='player 1';
        }
        if(playerTwoName===''){
            playerTwoName='player 2';
        }
        singlePlayerGame(playerOneName,playerTwoName);
    });
    


}
startingPage();


const eventListener = () => {
    document.querySelector('.single-player-button').addEventListener('click', () => {
        removeAllChildNodes(game);
        singlePlayerPage();
    });
    document.querySelector('.two-player-button').addEventListener('click', () => {
        removeAllChildNodes(game);
        twoPlayerPage();
    });
    
  
}
eventListener();

// the game begins
let innerValue='X';
const changeValue = () => {
    if(innerValue=='X'){
        innerValue='O';
    }
    else{
        innerValue='X';
    }
}
const handleCellClick = (e) => {
    const location=e.target.classList[0];
    // let tempValue=innerValue;
    // document.querySelector(`.${location}`).innerHTML=tempValue;
    arrayValueInsert(location);
}
const playGame = () => {
    const gridCells=document.querySelectorAll('.grid-item');
    for(gridCell of gridCells){
        gridCell.addEventListener('click', handleCellClick);
    }
}
const findArrayNumber = (location) => {
    if(location == 'top-left')return 0;
    if(location == 'top-middle')return 1;
    if(location == 'top-right')return 2;
    if(location == 'middle-left')return 3;
    if(location == 'middle-middle')return 4;
    if(location == 'middle-right')return 5;
    if(location == 'lower-left')return 6;
    if(location == 'lower-middle')return 7;
    if(location == 'lower-right')return 8;
}
let arr=[0,0,0,
         0,0,0,
         0,0,0];
const arrayValueInsert = (location) => {
    const arrayValue=findArrayNumber(location);
    if(arr[arrayValue]==0){
        arr[arrayValue]=innerValue;
        changeValue();
    }
    render();
    checkGame();
}
const render = () => {
    const cellSelector=document.querySelectorAll('.grid-item');
    let i=0;
    for(sel of cellSelector){
        if(arr[i]!=0){
            sel.innerHTML=arr[i];
        }
        else{
            sel.innerHTML='';
        }
        i++;
    }
}
function check(a,b,c){
    if(arr[a]==arr[b] && arr[b]==arr[c] && arr[a]!=0){
        const winner=person().myHeading('winner-class','WINNER');
        if(arr[a]=='X'){
            const winnerA=document.querySelector('.heading-player-one-name');
            winnerA.appendChild(winner.heading1);
        }
        else{
            const winnerB=document.querySelector('.heading-player-two-name');
            winnerB.appendChild(winner.heading1);
        }
        // const mainGridDiv=document.querySelector('.main-grid-div');
        // mainGridDiv.addEventListener('click',()=>{
        //     mainGridDiv.addEventListener('click',()=>{
        //         resetGrid();
        //     });
        // });
    }
}

const checkGame = () => {
    check(0,1,2);
    check(0,4,8);
    check(0,3,6);
    check(2,4,6);
    check(2,5,8);
    check(6,7,8);
    check(3,4,5);
    check(1,4,7);      
}
function resetGrid ()  {
    for(let i=0;i<10;i++){
        arr[i]=0;
    }
    const winner=document.querySelectorAll('.winner-class');
    for(win of winner){
        win.remove();
    }
    console.log('done');
    render();
}