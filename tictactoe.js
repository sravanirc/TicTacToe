let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");
message.textContent="Let's Begin!";

let currentPlayer = "X";
let winner = null;
let moves = 0;

function handleClick(event){
    let cell = event.target;
    
    if(cell.textContent==="" && !winner){
        cell.textContent = currentPlayer;
        moves++;
    }
    
    if(checkWin()){
        winner = currentPlayer;
    }else if(moves>=9){
        winner = "Draw";
    }else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("player").textContent = `Its player ${currentPlayer} turn.`;
    }

  if(winner){
    displayWinner();

  }
}

function checkWin(){
    let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    
    for(let pattern of winPatterns){
         let [a,b,c] = pattern;

        if(cells[a].textContent != "" && 
           cells[a].textContent==cells[b].textContent &&
           cells[b].textContent==cells[c].textContent){
            console.log(cells[a].textContent);
            return true;
        }
    }
}

function displayWinner(){
    if(winner==="Draw"){
        message.textContent =  "It's a Draw!";
    }
    else {
        message.textContent = `Player ${winner} wins!`;
        document.getElementById("player").textContent = `Congratulations Player ${currentPlayer}!`;
    }
}

function reset(){
    cells.forEach((cell)=>(cell.textContent=""));
    winner=null;
    moves=0;
    message.textContent="Let's Go Again!";
}

cells.forEach((cell)=> cell.addEventListener("click",handleClick));
document.getElementById("reset").addEventListener("click",reset);