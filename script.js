
let player = "X";
let gameOver = false;
const board = document.querySelectorAll("td");
      
function checkWinner() {
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
for (let combo of winningCombos) {
    if (board[combo[0]].textContent === player &&
        board[combo[1]].textContent === player &&
        board[combo[2]].textContent === player) {
    gameOver = true;
    for (let i = 0; i < 3; i++) {
        board[combo[i]].style.backgroundColor = "#8bc34a";
        }
        break;
        }
    }
}
      
function handleClick() {
    if (!gameOver && this.textContent === "") {
        this.textContent = player;
        this.classList.add("disabled");
        checkWinner();
        player = player === "X" ? "O" : "X";
    }
}
      
board.forEach(square => square.addEventListener("click", handleClick));