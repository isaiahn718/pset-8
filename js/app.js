///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let x_wins_count = 0
let o_wins_count = 0
let switch_turn_count = 0
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;

document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("switch").onclick = switch_turn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  turn = "X";
  win = null;

  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;    // writes an X or an O on board
  });

  message.textContent = `Turn: ${turn}`;
}
function takeTurn(e) {
  let index = squares.findIndex(function(square) {
    return square === e.target;
  });

  board[index] = turn;
  turn = turn === "X" ? "O" : "X";
  win = getWinner();

  render();
}
  if (board[0] && board[0] === board[1] && board[1] === board[2]) {
    win = board[0];   // either X or O
  } else if (/* next winning condition */) {
    win = board[0];   // either X or O
  }
  function getWinner() {
    let winner = null;

    winningConditions.forEach(function(condition, index) {
      if (
        board[condition[0]] &&
        board[condition[0]] === board[condition[1]] &&
        board[condition[1]] === board[condition[2]]
      ) {
        winner = board[condition[0]];
      }
    });

    return winner;
  }
