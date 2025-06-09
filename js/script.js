let gameActive = true;
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const board = document.querySelector(".board");
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("button");
  cell.classList.add("cell");
  cell.setAttribute("data-index", i);
  cell.addEventListener("click", handleClick);
  board.appendChild(cell);
}
function handleClick(e) {
  const cell = e.target;
  const cellIndex = parseInt(cell.getAttribute("data-index"));
  console.log(cellIndex);
  cell.innerText = currentPlayer;
}
