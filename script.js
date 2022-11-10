let text1Div = document.getElementById('text1');
let text2Div = document.getElementById('text2');
let text3Div = document.getElementById('text3');

let scores={'player1':0,'computer':0};

function getcomputerChoice() {
    const RPS = ['Rock', 'Paper', 'Sissor']
    const x = Math.floor(Math.random() * 3);
    return RPS[x];
}
function onClickRPS(playerChoice) {
    console.log(playerChoice);
    const comp = getcomputerChoice();
    console.log(comp);
   const score= getResult(playerChoice, comp);
   showResult(playerChoice,comp,score);
}

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0;
        
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Sissor') {
        score = 1;
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1;
    }
    else if (playerChoice == 'Sissor' && computerChoice == 'Paper') {
        score = 1;
    }
    else {
        score = -1;
    }
    return score;
}


function showResult(playerChoice, computerChoice, score) {
    if(score==1){
        console.log("Player1 wins");
        scores['player1']+=1;
        text1Div.innerText="You win!!!";
    }
    else if(score==0){
        console.log("Its a draw");
        text1Div.innerText="Its a Draw!!!";
    }
    else{
        scores['player1']-=1;
        console.log("Player1 loses");
        text1Div.innerText="You lose!!!";
        
    }
    text2Div.innerText=`🚶‍♂️${playerChoice} vs 🤖${computerChoice}`;
    text3Div.innerText=`Scores are::${scores['player1']}`
}
function gamePlaying() {
    let x = getcomputerChoice();
    // console.log(x);
    const rpsButtons = document.querySelectorAll('.card1');
    //    console.log(rpsButtons[0].value);
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => {
            onClickRPS(rpsButton.value);
            // console.log(rpsButton.value);
        }
    });

}

gamePlaying();

function stopGame() {
scores['player1']=0;
scores['computer']=0;
text1Div.innerText='';
text2Div.innerText='';
text3Div.innerText='';

}