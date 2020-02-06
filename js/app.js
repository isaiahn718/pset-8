///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;s
let turn;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";

  render();
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;    // writes an X or an O on board
    });
  }
  function takeTurn(e) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    board[index] = turn;
    turn = turn === "X" ? "O" : "X";  // alternate turns

    render();
  }
