const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')

const choiceBtn = document.querySelectorAll('.choiceBtn')


let player, computer, result;

choiceBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        player = button.textContent;
        computerTurn();

        playerText.textContent = `Player : ${player}`
        computerText.textContent = `Computer : ${computer}`
        result= getResult();
        resultText.textContent = `Result : ${getResult()}`;
    })
})

function computerTurn(){
    let x= (Math.floor(Math.random()*100))%3;
    if(x==0) computer= "Rock";
    else if(x==1) computer= "Paper";
    else computer= "Scissor"
}


function getResult(){
    if(player==computer) return "Draw";
    if(player=="Paper" && computer=="Rock") return "Player";
    else if(player=="Paper" && computer=="Scissor") return "Computer";

    else if(player=="Rock" && computer=="Scissor") return "Player";
    else if(player == "Rock" && computer=="Paper") return "Computer";

    else if(player=="Scissor" && computer=="Paper") return "Player";
    else if(player=="Scissor" && computer=="Rock")  return "Computer";
}